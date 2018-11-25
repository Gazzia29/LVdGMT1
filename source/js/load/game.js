var game = {
  pageID: 0,
  page: {},
  scene: {},
  loadPage: function (pageID) {
    game.pageID = pageID;
    game.page = new Page(pageList[pageID]);
    game.scene = game.page.scenes[game.page.sceneID - 1];
    $("main .textbox.title").html(game.page.title.format());
    $("main .textbox.scene").html(game.page.fluff.format());
    $("main .extrasContainer").html('');
    $("main .textbox.story").html(game.scene.story().format());
    game.scene.extras();
    game.page.refBackground();
  },
  refreshPage: function () {
    game.scene = game.page.scenes[game.page.sceneID - 1];
    $("main .textbox.title").html(game.page.title.format());
    $("main .textbox.scene").html(game.page.fluff.format());
    $("main .extrasContainer").html('');
    $("main .textbox.story").html(game.scene.story().format());
    game.scene.extras();
    game.page.refBackground();
  },
  ui: {
    isHidden: false,
    show() {
      $('main.main').css('animation', 'show-ui-main 0.6s ease forwards');
      $('nav.gameMenu').css('animation', 'show-ui-nav 0.6s ease forwards');
      this.isHidden = false;
    },
    hide() {
      $('main.main').css('animation', 'hide-ui-main 0.6s ease forwards');
      $('nav.gameMenu').css('animation', 'hide-ui-nav 0.6s ease forwards');
      this.isHidden = true;
    },
    toggle() {
      this.isHidden ? this.show() : this.hide();
    }
  }
};