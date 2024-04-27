package env

import (
	"github.com/joho/godotenv"
	"log"
)

func LoadEnv(file string) {
	err := godotenv.Load(file)

	if err != nil {
		log.Printf("Error loading .env file")
		panic(err)
	}

}
