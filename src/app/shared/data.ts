export interface NavigationDataInterface {
    name: string,
    url: string,
    sidebarMenu?: SidebarmenuInterface[]
}
export interface SidebarmenuInterface {
    title?: string,
    url?: string,
    icon?: string
}
export const NavigationData: NavigationDataInterface[] = [
    {
        name: 'Admin',
        url: '/',
        sidebarMenu: [
            {
                title: 'Time Sheet',
                icon: ''
            }
        ]
    },
    {
        name: 'Tool Box',
        url: '/toolbox',
        sidebarMenu: [
            {
                title: 'Time Sheet',
                url: '/toolbox/timesheet',
                icon: 'assets/icons/clock.svg'
            },
            {
                title: 'Leave Request',
                url: '/toolbox/leave-request',
                icon: 'assets/icons/edit.svg'
            },
            {
                title: 'Requisitions',
                url: '/toolbox/requisitions',
                icon: 'assets/icons/requisition.svg'
            },
            {
                title: 'Cash Advance',
                url: '/toolbox/cash-advance',
                icon: 'assets/icons/cash.svg'
            },
        ]
    },
    {
        name: 'Project Manangement',
        url: '/'
    },
    {
        name: 'Accounting',
        url: '/'
    },
]