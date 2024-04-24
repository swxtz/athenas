package cron

import (
	"fmt"
	"time"

	"github.com/robfig/cron"
	"github.com/swxtz/athenas/apps/microservices/scheduler/scheduler"
)

func Cron() {
	fmt.Printf(time.Now().String() + "- Start App - Version SimpleCron")

	c := cron.New()
	c.AddFunc("@every 10s", scheduler.Task)
}
