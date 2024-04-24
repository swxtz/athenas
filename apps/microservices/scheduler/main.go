package main

import (
	"github.com/swxtz/athenas/apps/microservices/scheduler/cron"
	"github.com/swxtz/athenas/apps/microservices/scheduler/scheduler"
)

func main() {
	cron.Cron()
	scheduler.Listen()
}
