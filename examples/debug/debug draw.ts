
var rect: Phaser.Rectangle = new Phaser.Rectangle( 100, 100, 100, 100 ) ;
var circle: Phaser.Circle = new Phaser.Circle( 280, 150, 100 ) ;
var point: Phaser.Point = new Phaser.Point( 100, 280 ) ;

var game: Phaser.Game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    render: () => {
        // Draw debug tools
        game.debug.geom( rect, "rgba(255,0,0,1)" ) ;
        game.debug.geom( circle, "rgba(255,255,0,1)" ) ;
        game.debug.geom( point, "rgba(255,255,255,1)" ) ;
        game.debug.pixel( 200, 280, "rgba(0,255,255,1)" ) ;
        game.debug.text( "This is debug text", 100, 380 );
    }  
});