import {ColumnDef} from "@tanstack/react-table";
import {LanguageData, LanguageRequest} from "@/app/lib/types/LanguageRequest";
import IndeterminateCheckbox from "@/app/components/shared/IndeterminateCheckbox";
import {formatDateHour} from "@/utils/DateUtils";
import React from "react";

export const defaultColumns: ColumnDef<LanguageData>[] = [
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
        cell: ({ row }) => (
            <IndeterminateCheckbox
                {...{
                    checked: row.getIsSelected(),
                    disabled: !row.getCanSelect(),
                    indeterminate: row.getIsSomeSelected(),
                    onChange: row.getToggleSelectedHandler(),
                }}
            />
        ),
    },
    {
        meta: {
            headerClass: "ks_wth_120",
            textAlign: 'text-center'
        },
        accessorKey: "name",
        id: "langName",
        header: "Name",
        // cell: (props) => getDateFormatted(props.getValue() as string),
    },
    {
        accessorKey: "lang_cd",
        id: "langCd",
        header: "Abbreviations",
        meta: {
            headerClass: "ks_wth_110",
            textAlign: 'text-center'
        },
        cell: (props) => props.getValue(),
    },
    {
        accessorKey: "regi_dtm",
        id: "registerDateTime",
        header: "Register date",
        cell: ({row}) => {
            const addressText = formatDateHour(row?.original?.regi_dtm);
            return (
                <>
                    <div className="ks-text-ellipsis">
                        {addressText}
                    </div>
                </>
            );
        },
        meta: {
            textAlign: 'text-start'
        }
    },

]