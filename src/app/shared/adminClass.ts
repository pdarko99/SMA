export interface admin {
    teachers: number;
    headmasters: number;
    accounts: number;
    classGroup: classes[]
    
}

interface classes {
    class: string;
    subjects:subject[]
}

export interface subject {
    subject: string
}