package uuid

import "github.com/samborkent/uuidv7"

func GenerateUUID() string {
	uuid := uuidv7.New()
	uuidFormated := uuid.String()

	return uuidFormated
}
