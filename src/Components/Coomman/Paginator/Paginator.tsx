import styles from "../Paginator/Paginator.module.css";
import React from "react";

export type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}
export const Paginator = (props: PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
                <div>
                    {pages.map(pageNumber => {
                        return (
                            <span
                                key={pageNumber}
                                onClick={() => props.onPageChanged(pageNumber)}
                                className={
                                    props.currentPage === pageNumber ? styles.selectedPage : ""}>{pageNumber}
                            </span>
                        )
                    })}
                </div>

    )
}