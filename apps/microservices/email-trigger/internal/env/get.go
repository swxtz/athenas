package env

import "os"

func GetEnv(key string) string {
	env := os.Getenv(key)

	return env
}
