import {ColumnDef} from "@tanstack/react-table";
import {LanguageRequest} from "@/app/lib/types/LanguageRequest";
import IndeterminateCheckbox from "@/app/components/shared/IndeterminateCheckbox";

export const defaultColumns: ColumnDef<any>[] = [
    {
        meta: {
            headerClass: "ks_wth_1",
        },
        accessorKey: "checkbox",
        id: "checkbox",
        enableSorting: false,
        enableHiding: false,
        header: ({table}) => (
            <IndeterminateCheckbox
                {...{
                    checked: table.getIsAllRowsSelected(),
                    indeterminate: table.getIsSomeRowsSelected(),
                    onChange: table.getToggleAllRowsSelectedHandler(),
                }}
            />
        ),
        // cell: ({ row }) => (
        //     <IndeterminateCheckbox
        //         {...{
        //             checked: row.getIsSelected(),
        //             disabled: !row.getCanSelect(),
        //             indeterminate: row.getIsSomeSelected(),
        //             onChange: row.getToggleSelectedHandler(),
        //         }}
        //     />
        // ),
    },
    {
        meta: {
            headerClass: "ks_wth_120",
            textAlign: 'text-center'
        },
        accessorKey: "profile",
        id: "profile",
        header: "Profile",
        // cell: (props) => getDateFormatted(props.getValue() as string),
    },
    {
        accessorKey: "role",
        id: "role",
        header: "Role",
        meta: {
            headerClass: "ks_wth_110",
            textAlign: 'text-center'
        },
        cell: (props) => props.getValue(),
    },
    {
        accessorKey: "register data",
        id: "register date",
        header: "Register date.",
        // cell: ({row}) => <div className="ks_wth_50">{row?.original?.numbering ?? "-"}</div>,
        meta: {
            textAlign: 'text-start'
        }
    },

]