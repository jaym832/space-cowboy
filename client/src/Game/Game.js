
import k from '../kaboom'
import down from './sprites/down2.png'
import right from './sprites/right2.png'
import left from './sprites/left2.png'
import up from './sprites/up2.png'
import enemy from './sprites/enemy.png'
import topwall from './sprites/topwall.png'
import topdoor from './sprites/door.png'
import bottomwall from './sprites/bottomwall.png'
import tree from './sprites/tree.png'
import leftwall from './sprites/leftwall.png'
import rightwall from './sprites/rightwall.png'
import money from './sprites/money.png'
import gameSong from './sprites/gameSong.mp3'
import branches from './sprites/branches.png'
import door from './sprites/door2.png'
import cactus from './sprites/cactus.png'




const MOVE_SPEED = 120

k.loadRoot('https://i.imgur.com/')
k.loadSprite('link-going-left', left)
k.loadSprite('link-going-right', right)
k.loadSprite('link-going-down', down)
k.loadSprite('link-going-up', up)
k.loadSprite('left-wall', leftwall)
k.loadSprite('top-wall', topwall)
k.loadSprite('bottom-wall', bottomwall)
k.loadSprite('right-wall', rightwall)
k.loadSprite('bottom-left-wall', 'awnTfNC.png')
k.loadSprite('bottom-right-wall', '84oyTFy.png')
k.loadSprite('top-left-wall', 'xlpUxIm.png')
k.loadSprite('top-right-wall', 'z0OmBd1.jpg')
k.loadSprite('top-door', topdoor)
k.loadSprite('fire-pot', tree)
k.loadSprite('left-door', 'okdJNls.png')
k.loadSprite('lanterns', branches)
k.loadSprite('slicer', 'c6JFi5Z.png')
k.loadSprite('skeletor', enemy)
k.loadSprite('kaboom', 'o9WizfI.png')
k.loadSprite('stairs', door)
k.loadSprite('bg', 'u3mQo6U.png')
k.loadSprite('money', money)
k.loadSprite('cactus', cactus)

const audio = new Audio(gameSong)


// k.scene('main',()=>{
k.scene("game", ({ level, score }) => {


  audio.play()

  k.layers(['bg', 'obj', 'ui'], 'obj')


  const maps = [
    [
      ' cccccccccccccccc^cc ',
      'a                   b',
      'a      *            b',
      'a    (      p       b',
      '%         (         b',
      'a    p  }           b',
      'a    (              b',
      'a   *               b',
      'a          p        b',
      ' ddddddddddddddddddd ',
    ],
    [
      ' ccccccccccccccccccc ',
      'a     p             b',
      'a                   b',
      'a                   b',
      'a                   b',
      '%     p      }      b',
      'a   }           $   b',
      'a                   b',
      ' ddddddddddddddddddd ',
    ],
    [
      'ccccccccccccccccccccc',
      'a                   b',
      'a  ((          p $( b',
      'a         }         b',
      'a     } *           b',
      '%                   b',
      'a  ()   p        () b',
      'a       }           b',
      'ddddddddddddddddddddd'
    ],
    [
      'ccccccccccccccccccccc',
      'a                   b',
      'a    $    *     p   b',
      'a       ()  *      }b',
      'a     p ()          b',
      'a       ()  }       b',
      'a((((((((           b',
      'a    p ()    }    } b',
      'a      ()    *      b',
      'a          *        b',
      'a                   b',
      'a                p  b',
      '%        ()      p  b',
      'a                   b',
      'ddddddddddddddddddddd'
    ],
    [
      'cccccccccccccccccccccccc',
      'apppp()    }           b',
      'a    ()                b',
      'a    ()    }           b',
      'a    ()    )           b',
      'a    ()***((((((((((  (b',
      'a    ()   (            b',
      'a    ()   )            b',
      'a         (     **     b',
      '%         )            b',
      'a         (       p   $b',
      'dddddddddddddddddddddddd'
    ],
    [
      'ccccccccccccccccc',
      'a    p        p b',
      'a (  )  (  )  ( b',
      'a               b',
      'a            m  b',
      '%               b',
      'a (  )  (  )  ( b',
      'a    p          b',
      'ddddddddddddddddd'
    ]
  ]


  const levelCfg = {
    width: 63,
    height: 48,
    'a': [k.sprite('left-wall'), k.solid(), 'wall', { scale: 1.4 }],
    'b': [k.sprite('right-wall'), k.solid(), 'wall', { scale: .5 }],
    'c': [k.sprite('top-wall'), k.solid(), 'wall', { scale: .5 }],
    'd': [k.sprite('bottom-wall'), k.solid(), 'wall', { scale: .5 }],
    'w': [k.sprite('top-right-wall'), k.solid(), 'wall'],
    'x': [k.sprite('bottom-left-wall'), k.solid(), 'wall'],
    'y': [k.sprite('top-left-wall'), k.solid(), 'wall'],
    'z': [k.sprite('bottom-right-wall'), k.solid(), 'wall'],
    '%': [k.sprite('left-door'), k.solid(), 'door'],
    '^': [k.sprite('top-door'), 'next-level', { scale: .8 }],
    '$': [k.sprite('stairs'), 'next-level', { scale: 1.5 }],
    '*': [k.sprite('slicer'), 'slicer', { dir: -1, timer: 0 }, 'dangerous'],
    '}': [k.sprite('skeletor'), k.solid(), 'dangerous', 'skeletor', { dir: -1, timer: 0, scale: 2 }],
    ')': [k.sprite('lanterns'), k.solid(), 'wall'],
    '(': [k.sprite('fire-pot'), k.solid(), 'wall'],
    'm': [k.sprite('money'), 'victory'],
    'p': [k.sprite('cactus'), k.solid(), 'wall', { scale: 2 }],

  }
  k.addLevel(maps[level], levelCfg)

  const floor = k.add([k.sprite('bg'),
  k.layer('bg'),
  k.scale(16)


  ])


  const scoreLabel = k.add([
    k.text(score),
    k.pos(400, 600),
    k.layer('ui'),
    k.origin('center'),
    {
      value: score,
    },
    k.scale(2)
  ])

  k.add([k.text('level ' + parseInt(level + 1)), k.pos(400, 550), k.origin('center'), k.scale(2)])

  const player = k.add([
    k.sprite('link-going-right'),
    k.pos(5, 190),
    k.scale(1.5),
    {
      // right by default
      dir: k.vec2(1, 0),
    }
  ])





  player.action(() => {
    player.resolve()

  })



  player.overlaps('next-level', () => {
    k.go("game", {
      level: (level + 1) % maps.length,
      score: scoreLabel.value

    })
  })

  k.keyDown('left', () => {
    player.changeSprite('link-going-left')
    player.move(-MOVE_SPEED, 0)
    player.dir = k.vec2(-1, 0)
  })

  k.keyDown('right', () => {
    player.changeSprite('link-going-right')
    player.move(MOVE_SPEED, 0)
    player.dir = k.vec2(1, 0)
  })

  k.keyDown('up', () => {
    player.changeSprite('link-going-up')
    player.move(0, -MOVE_SPEED)
    player.dir = k.vec2(0, -1)
  })

  k.keyDown('down', () => {
    player.changeSprite('link-going-down')
    player.move(0, MOVE_SPEED)
    player.dir = k.vec2(0, 1)
  })

  function spawnKaboom(p) {
    const obj = k.add([k.sprite('kaboom'), k.pos(p), 'kaboom'])
    k.wait(1, () => {
      k.destroy(obj)
    })
  }

  k.keyPress('space', () => {
    spawnKaboom(player.pos.add(player.dir.scale(48)))
  })

  player.collides('door', (d) => {
    k.destroy(d)
  })

  k.collides('kaboom', 'skeletor', (j, s) => {
    k.camShake(4)
    k.wait(1, () => {
      k.destroy(j)
    })
    k.destroy(s)
    scoreLabel.value++
    scoreLabel.text = scoreLabel.value
    addScore(scoreLabel.value)
  })

  const SLICER_SPEED = 100

  k.action('slicer', (s) => {
    s.move(s.dir * SLICER_SPEED, 0)
    // s.resolve()
  })

  k.collides('slicer', 'wall', (s) => {
    s.dir = -s.dir
  })

  const SKELETOR_SPEED = 60

  k.action('skeletor', (s) => {
    s.move(0, s.dir * SKELETOR_SPEED)
    s.timer -= k.dt()
    s.resolve()
    if (s.timer <= 0) {
      s.dir = - s.dir
      s.timer = k.rand(5)
    }

  })

  k.collides('skeletor', 'wall', (s) => {
    s.dir = -s.dir
  })


  player.collides('dangerous', () => {
    k.go('lose', { score: scoreLabel.value })
    window.value = scoreLabel.value
    test(window.value)
    audio.pause()
  })


  player.overlaps('victory', () => {
    k.go('win', { score: scoreLabel.value })
    window.value = scoreLabel.value
    test(window.value)
    audio.pause()
  })




})

k.scene("win", ({ score }) => {
  k.add([k.text("YOU WIN!", 32), origin('center'), k.pos(k.width() / 2, k.height() / 3)])
  k.add([k.text(score, 32), origin('center'), k.pos(k.width() / 2, k.height() / 2)])


})

k.scene("lose", ({ score }) => {
  k.add([k.text("YOU DIED", 32), origin('center'), k.pos(k.width() / 2, k.height() / 3), k.color(1, 0, 0)])
  k.add([k.text(score, 32), origin('center'), k.pos(k.width() / 2, k.height() / 2)])

})

k.scene("gameover", () => {
  console.log('game is over')
  audio.pause()
})



function test(score) {
  let postOptions = {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify(score)
  }
  fetch('/score', postOptions)
    .then(res => res.json())
    .then(data => console.log(data))


}


function addScore(score) {
  return score + score
}



export const gameStart = () => { k.start("game", { level: 0, score: 0 }) };
export const gameOver = () => { k.go('gameover') };



