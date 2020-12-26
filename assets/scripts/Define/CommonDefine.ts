//
//
//
export namespace CommonDefine{
    export enum eTalentType{
        TALENT_NONE,

        //base
        TALENT_A1,//资源占据：从自己所在格子获得1生命点
        TALENT_A2,//a2资源吸收：从前后未被敌人占据的格子各获得1生命点
        TALENT_A3,//a3基本攻击：面向敌人，以1点攻击力攻击前方敌人
        TALENT_B1,// b1加命：面对友军，为友军增加1生命点；
        TALENT_B2,//b2助攻：面对友军，且友军处于攻击状态，则自己的攻击力加到友军身上；备注：妨碍敌方的a2天赋可以减少敌方生命总量；背对背是天赋b5处于攻击状态= 面对敌人或面对空格

        //talent
        TALENT_B3,//b3环：己方n个棋子形成环，每个棋子增加n生命点
        TALENT_B4,// b4吸收：两个棋子相对，各具备3吸收力，能够对背后的敌人吸收最多3的攻击力；备注：经最近测试，改为3吸收力可以让吸收阵更加实用，而且也不会过于强大，不过可能导致以前设计的一些残局解法有变，一个有效的解决办法就是给以往的残局再设定天赋条件，比如每个残局都设定好了允许使用的天赋
        TALENT_B5,//b5双尖：两颗棋子背对背，各增加2攻击力；
        TALENT_C1,// c1吃子移动：己方活动时，若通过攻击干掉对方棋子，则获得1点移动能力，允许在本回合内向前移1格；
        //etc..
    };
    export enum TalentSlotState{
		TALENT_LOCK,
		TALENT_CAN_INSTALL,
		TALENT_INSTALLED,
	};

    export const TALENT_SLOT_STATE : string = "TALENT_SLOT_STATE";
    export const MAX_TALENT_CFG_NUM : number = 4;
}