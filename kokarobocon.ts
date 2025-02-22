
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/
enum MyEnue {
    //% block="前"
    前,
    //% block="後ろ"
    後ろ,
    //% block="右"
    右,
    //% block="左"
    左,
    //% block="止まる"
    止まる,
};
let speed: number

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace ロボコン {
    //% block
    //%  speed.min=-100 speed.max=100
    export function 回転サーボ(speed: number, e: MyEnue): void {
        if (MyEnue.前 == MyEnue.前){
        servos.P1.run(-speed)
        servos.P2.run(speed)
    }
        if (MyEnue.後ろ == MyEnue.後ろ) {
        servos.P1.run(speed)
        servos.P2.run(-speed)
    }
        if (MyEnue.右 == MyEnue.右) {
        servos.P1.stop()
        servos.P2.run(speed)
    }
        if (MyEnue.左 == MyEnue.左) {
        servos.P1.run(-speed)
        servos.P2.stop()
    }
        if (MyEnue.止まる == MyEnue.止まる) {
        servos.P1.stop()
        servos.P2.stop()
    }
    }
}