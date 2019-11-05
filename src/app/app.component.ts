import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "mini-netflix";
  ngOnInit(): void {
    console.log(this.getStyle());
  }

  randomNumber(): number {
    return Math.round(Math.random() * 12);
  }
  getStyle() {
    if (this.randomNumber() > 0 && this.randomNumber() < 8) {
      return {
        backgroundImage:
          "url(../assets/img/hom/hom" + this.randomNumber() + ".jpg)"
      };
    } else if (this.randomNumber() >= 8 && this.randomNumber() < 10) {
      return {
        backgroundImage:
          "url(../assets/img/hom/hom" + this.randomNumber() + ".jpeg)"
      };
    } else if (this.randomNumber() >= 10 && this.randomNumber() < 12) {
      return {
        backgroundImage:
          "url(../assets/img/hom/hom" + this.randomNumber() + ".webp)"
      };
    } else {
      return {
        backgroundImage: "url(../assets/img/hom//hom12.png"
      };
    }
  }
}
