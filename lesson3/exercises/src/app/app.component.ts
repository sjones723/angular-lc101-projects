import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Exercises: Angular Lesson 3";

  color = "green";
  height = 0;
  width = 0;
  message = "Space shuttle ready for takeoff!";
  takeOffStatus = false;
  /*When the "Take off" button is clicked, the following should happen:
A confirmation window should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add steps b-d.
The flight status should change to "Shuttle in flight."
The background color of the shuttle flight screen should change from green to blue.
The shuttle height should increase by 10,000 km.*/
  handleTakeOff(rocketImage) {
    let result = window.confirm(
      "Are you sure the shuttle is ready for takeoff?"
    );
    if (result) {
      this.color = "blue";
      this.height = 10000;
      this.width = 0;
      this.message = "Shuttle in flight.";
      rocketImage.style.bottom = "10px";
      this.takeOffStatus = true;
    }
  }

  /*When the "Abort Mission" button is clicked, the following should happen:
- A confirmation window should prompt the user if they really want to abort the mission. If the user wants to abort the mission, then add steps b-d.
- The flight status should change to "Mission aborted."
The background color of the shuttle flight screen should change from blue to red.
The shuttle height should go down to 0.*/
  handleAbort(rocketImage) {
    let result = window.confirm("Are you sure you want to abort the mission?");
    if (result) {
      this.color = "red";
      this.height = 0;
      this.width = 0;
      this.message = "Mission aborted.";
      rocketImage.style.bottom = "0px";
      this.takeOffStatus = false;
    }
  }
  /*
  When the "Land" button is clicked, the following should happen:
- A window alert should let the user know "The shuttle is landing. Landing gear engaged."
- The flight status should change to "The shuttle has landed."
- The background color of the shuttle flight screen should change from blue to green.
- The shuttle height should go down to 0.
  */
  handleLand(rocketImage) {
    window.alert("The shuttle is landing. Landing gear engaged.");

    this.color = "green";
    this.height = 0;
    this.width = 0;
    this.message = "The shuttle has landed.";
    rocketImage.style.bottom = "0px";
    this.takeOffStatus = false;
  }

  moveRocket(rocketImage, direction) {
    if (direction === "right") {
      let movement = parseInt(rocketImage.style.left) + 10 + "px";
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } else if (direction === "left") {
      let movement = parseInt(rocketImage.style.left) - 10 + "px";
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } else if (direction === "up" && this.height <= 390000) {
      let movement = parseInt(rocketImage.style.bottom) + 10 + "px";
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    } else if (direction === "down" && this.height >= 10000) {
      let movement = parseInt(rocketImage.style.bottom) - 10 + "px";
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
  }

  edgewarning(rocketImage, shuttleBackground) {
    let rockectLocation = Math.abs(parseInt(rocketImage.style.left));
    let backgroundEdges = parseInt(shuttleBackground.style.width);

    console.log(backgroundEdges);

    // if (rockectLocation >= backgroundEdges) {
    //   this.color = "orange";
    //   return true;
    // }
  }
}
