package scheduler

import (
	"fmt"
	"time"
)

func Task() {
	fmt.Println(time.Now().String() + " - Start task")
	time.Sleep(5 * time.Second)
	fmt.Println(time.Now().String() + " - End task")
}
