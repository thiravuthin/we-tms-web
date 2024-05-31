import {ColumnDef} from "@tanstack/react-table";
import React from "react";
import IndeterminateCheckbox from "@/app/components/shared/IndeterminateCheckbox";
import {User} from "@/app/lib/types/user";
import Image from "next/image";
import {formatDateHour} from "@/utils/DateUtils";

export const DefaultColumns: ColumnDef<User>[] = [
    {
        meta: {headerClass: "ks_table_no_padding"},
        accessorKey: "checkbox",
        id: "checkbox",
        enableSorting: false,
        header: ({table}) => (
            <IndeterminateCheckbox
                {...{
                    checked: table.getIsAllRowsSelected(),
                    indeterminate: table.getIsSomeRowsSelected(),
                    onChange: table.getToggleAllRowsSelectedHandler(),
                }}
            />
        ),
        cell: ({row}) => (
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
        meta: {headerClass: "ks_table_header_custom"},
        accessorKey: "profile",
        id: "profile",
        header: "Profile",
        cell: ({row}) => {
            const addressUserImg = row?.original?.usr_prof_img;
            const addressTextProfile = row?.original?.full_nm;
            const addressTextRole = row?.original?.usr_nm;
            return (
                <>
                    <div className="ks_d_flex ks_alg_itm_ctr ks_d_inl_flex ks_pl_0 pt-1">
                        <img id="ks_wt_app_header_username_badge"
                               src={addressUserImg} width={85}
                               height={85} alt="" style={{ borderRadius: '100%', objectFit: 'cover' }}/>
                        <div className="ks_d_flex ks_flex_col px-2">
                            <label className="ks_pl10">{addressTextProfile}</label>
                            <label className="ks_pl10">{"@" + addressTextRole}</label>
                        </div>
                    </div>
                </>
            )
        }

    },
    {
        meta: {headerClass: "ks-min-width-220 ks-max-width-200"},
        accessorKey: "role",
        id: "role",
        header: "Role",
        cell: ({row}) => {
            const addressText = row?.original?.role;

            return (
                <>
                    <div className="ks-text-ellipsis">
                        {addressText}
                    </div>
                </>
            );
        },
    },
    {
        meta: {headerClass: "ks-min-width-220 ks-max-width-200"},
        accessorKey: "register_date",
        id: "registerDate",
        header: "Register Date",
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
    },
]