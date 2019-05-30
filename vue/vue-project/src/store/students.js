export default {
    namespaced: true,
    state: {
        currentPage: 1,
        pageSize: 1,
        totalPages: 0,
        totalCount: 0,
        students: []
    },
    mutations: {
        getStudentsByPage(state, payload) {
            Object.assign(state, payload);
        },
        setNextPage(state) {
            if(state.currentPage < state.totalPages) {
                state.currentPage = state.currentPage - 0 + 1;
            }
        },
        setPrevPage(state) {
            if(state.currentPage > 1) {
                state.currentPage -= 1;
            }
        },
        setFirstPage(state) {
            state.currentPage = 1;
        },
        setLastPage(state) {
            state.currentPage = state.totalPages;
        },
        setPageSize(state, payload) {
            state.pageSize = payload;
        }
    },
    actions: {
        async getStudentsByPageAsync(context) {
            const {currentPage, pageSize} = context.state;
            const data = await fetch(`/students/getStudentsByPage?currentPage=${currentPage}&pageSize=${pageSize}`)
            .then(res => res.json());
            context.commit("getStudentsByPage", data)
        }
    }
}