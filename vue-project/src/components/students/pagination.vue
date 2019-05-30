<template>
    <div>
        <div class="pagination-row">
            <div>
                <label>每页显示条数：</label>
                <select v-model="pageSize">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div>
                <span>共 {{totalPages}} 页，总计 {{totalCount}} 条数据</span>
            </div>
        </div>
        <div class="pagination-row">
            <div>
                <button @click="setFirstPage">首页</button>
                <button @click="setPrevPage">上一页</button>
                <button @click="setNextPage">下一页</button>
                <button @click="setLastPage">尾页</button>
                <span>跳转至第</span>
                <input type="text"  />
                <span>页</span>
            </div>
            <span>当前页：{{currentPage}}</span>
        </div>
    </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("students");
export default {
    watch: {
        currentPage() {
            this.getStudentsByPageAsync()
        },
        pageSize() {
            this.getStudentsByPageAsync()
        }
    },
    computed: {
        ...mapState(['currentPage', 'pageSize', 'totalPages', 'totalCount']),
        currentPage: {
            get: mapState(['currentPage']).currentPage,
            set: mapMutations(['setNextPage']).setNextPage
        },
        pageSize: {
            get: mapState(['pageSize']).pageSize,
            set: mapMutations(['setPageSize']).setPageSize
        }
    },
    methods: {
        ...mapMutations(['setNextPage', 'setPrevPage', 'setFirstPage', 'setLastPage']),
        ...mapActions(['getStudentsByPageAsync']),
    }
}

</script>

<style>
.pagination-row {
    display: flex;
}
</style>
