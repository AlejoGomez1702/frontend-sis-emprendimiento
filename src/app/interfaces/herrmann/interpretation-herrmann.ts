export interface InterpretationHerrmann
{
    code: number,
    hemisphere: number,
    interpretation: {
        Characteristics?: string,
        Description: string,
        Dominance: string,
        Nickname: string,
        Weakness?: string
    },
    messagge: string,
    scors: {
        A: number,
        B: number,
        C: number,
        D: number
    }
}