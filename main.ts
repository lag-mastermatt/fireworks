namespace SpriteKind {
    export const Firework = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (spriteList.length > 0) {
        origin = spriteList[randint(0, 10)]
        for (let index = 0; index < 30; index++) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, origin, randint(-100, 100), randint(-100, 100))
            origin.setFlag(SpriteFlag.Ghost, true)
            projectile.image.fill(randint(1, 14))
        }
        origin.destroy()
    }
})
let projectile: Sprite = null
let origin: Sprite = null
let spriteList: Sprite[] = []
let fireworks: Sprite = null
for (let index = 0; index < 10; index++) {
    fireworks = sprites.create(assets.image`firework`, SpriteKind.Firework)
    fireworks.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    fireworks.setFlag(SpriteFlag.Ghost, true)
}
spriteList = sprites.allOfKind(SpriteKind.Firework)
