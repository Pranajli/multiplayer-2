class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  getCount() {
    var PlayerCountRef = database.ref("PlayerCount");
    PlayerCountRef.on("value", (data)=> {
      PlayerCount = data.val();
    });
  }
  //BP
  updateCount(Count) {
    database.ref("/").updateCount({
      PlayerCount: state
    });
  }

 }

