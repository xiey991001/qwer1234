export interface Today {
    confirm: number;
    isUpdated: boolean;
}

export interface Total {
    continueDayZeroLocalConfirm: number;
    showHeal: boolean;
    highRiskAreaNum: number;
    continueDayZeroLocalConfirmAdd: number;
    mtime: string;
    adcode: string;
    dead: number;
    heal: number;
    provinceLocalConfirm: number;
    nowConfirm: number;
    mediumRiskAreaNum: number;
    confirm: number;
    showRate: boolean;
    wzz: number;
}

export interface Today {
    confirm: number;
    confirmCuts: number;
    isUpdated: boolean;
    tip: string;
    wzz_add: number;
    local_confirm_add: number;
    abroad_confirm_add: number;
    dead_add: number;
}

export interface Total {
    mediumRiskAreaNum: number;
    continueDayZeroConfirm: number;
    heal: number;
    wzz: number;
    showRate: boolean;
    provinceLocalConfirm: number;
    highRiskAreaNum: number;
    continueDayZeroLocalConfirmAdd: number;
    adcode: string;
    nowConfirm: number;
    dead: number;
    showHeal: boolean;
    continueDayZeroConfirmAdd: number;
    mtime: string;
    confirm: number;
}

export interface Today {
    confirmCuts: number;
    isUpdated: boolean;
    wzz_add: number;
    local_confirm_add: number;
    confirm: number;
}

export interface Total {
    nowConfirm: number;
    confirm: number;
    heal: number;
    mtime: string;
    continueDayZeroLocalConfirmAdd: number;
    dead: number;
    showRate: boolean;
    wzz: number;
    provinceLocalConfirm: number;
    highRiskAreaNum: number;
    showHeal: boolean;
    mediumRiskAreaNum: number;
    continueDayZeroLocalConfirm: number;
    adcode: string;
}

export interface Children {
    name: string;
    adcode: string;
    date: string;
    today: Today;
    total: Total;
}

export interface Children {
    name: string;
    adcode: string;
    date: string;
    today: Today;
    total: Total;
    children: Children[];
}

export interface AreaTree {
    name: string;
    today: Today;
    total: Total;
    children: Children[];
}

export interface ChinaTotal {
    confirm: number;
    heal: number;
    dead: number;
    importedCase: number;
    confirmAdd: number;
    deadAdd: number;
    mRiskTime: string;
    localConfirmH5: number;
    local_acc_confirm: number;
    nowLocalWzz: number;
    mtime: string;
    noInfect: number;
    showLocalConfirm: number;
    localConfirm: number;
    suspect: number;
    nowSevere: number;
    showlocalinfeciton: number;
    noInfectH5: number;
    localWzzAdd: number;
    localConfirmAdd: number;
    mediumRiskAreaNum: number;
    highRiskAreaNum: number;
    nowConfirm: number;
}

export interface ChinaAdd {
    localConfirmH5: number;
    heal: number;
    nowConfirm: number;
    importedCase: number;
    noInfect: number;
    localConfirm: number;
    confirm: number;
    dead: number;
    suspect: number;
    nowSevere: number;
    noInfectH5: number;
}

export interface ShowAddSwitch {
    all: boolean;
    nowConfirm: boolean;
    noInfect: boolean;
    importedCase: boolean;
    localConfirm: boolean;
    localinfeciton: boolean;
    confirm: boolean;
    suspect: boolean;
    dead: boolean;
    heal: boolean;
    nowSevere: boolean;
}

export interface Diseaseh5Shelf {
    areaTree: AreaTree[];
    lastUpdateTime: string;
    chinaTotal: ChinaTotal;
    chinaAdd: ChinaAdd;
    isShowAdd: boolean;
    showAddSwitch: ShowAddSwitch;
}

export interface LocalCityNCOVDataList {
    adcode: string;
    local_confirm_add: number;
    local_wzz_add: string;
    mediumRiskAreaNum: number;
    province: string;
    city: string;
    mtime: string;
    highRiskAreaNum: number;
    isSpecialCity: boolean;
    date: string;
    isUpdated: boolean;
}

export interface RootObject {
    diseaseh5Shelf: Diseaseh5Shelf;
    localCityNCOVDataList: LocalCityNCOVDataList[];
}