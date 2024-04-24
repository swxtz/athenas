package scheduler

import (
	"fmt"
	"os"
	"os/signal"
	"time"
)

func Listen() {
	sig := make(chan os.Signal)

	signal.Notify(sig, os.Interrupt, os.Kill)
	<-sig

	fmt.Println(time.Now().String() + " - Stop scheduler")
}
