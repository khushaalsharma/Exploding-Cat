package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

type user struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	Username string `json:"username"`
	Score    int    `json:"score"`
}

//starting users for the game

var users = []user{
	{ID: "1", Name: "Tony", Username: "tony69", Score: 4},
	{ID: "2", Name: "Raj", Username: "raj001", Score: 3},
	{ID: "3", Name: "Aman", Username: "aman007", Score: 4},
}

// Functions to manage the CRUD operations
// gin.Context carries themost important part of Gin, it carries request details, validates and serializes JSON
func getUsers(c *gin.Context) {
	fmt.Println("Endpoint: /users")
	c.IndentedJSON(http.StatusOK, users)
}

func addUser(c *gin.Context) {
	fmt.Println("Endpoint: /newUser")

	var newUser user

	//using BindJSON to bind the recieved JSON to newUser
	if err := c.BindJSON(&newUser); err != nil {
		fmt.Println("Error binding JSON:", err.Error()) // Debug statement
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	users = append(users, newUser)
	c.IndentedJSON(http.StatusCreated, newUser)
}

func updateUserScore(c *gin.Context) {
	fmt.Println("Endpoint: /users/:id/score") // Debug statement

	userID := c.Param("id")

	// Find the user in the slice by ID
	var foundUser *user
	for i, u := range users {
		if u.ID == userID {
			foundUser = &users[i]
			break
		}
	}

	if foundUser == nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	var newScore int
	if err := c.BindJSON(&newScore); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON payload"})
		return
	}

	foundUser.Score = newScore

	c.JSON(http.StatusOK, foundUser)
}

func main() {
	router := gin.Default()

	router.GET("/users", getUsers)
	router.POST("/newUser", addUser)
	router.PUT("/users/:id/score", updateUserScore)

	fmt.Println("Server listening on localhost:8080")
	router.Run("localhost:8080") // Change this line
}
