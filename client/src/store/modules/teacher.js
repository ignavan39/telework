import axios from "axios";
export default {
    actions: {
        async fetchTeachers(ctx) {
            await axios
                .get("/api")
                .then(response => {
                    const teachers = response.data;
                    const areaSet = new Set();
                    const schoolSet = new Set();

                    // this.teachers = response.data;
                    //this.areaSet = new Set();
                    //this.schoolSet = new Set();
                    for (let item of teachers) {
                        schoolSet.add(item.school.trim());
                        areaSet.add(item.Area.trim());
                    }
                    ctx.commit('updateTeachers', teachers);
                    ctx.commit('updateAreaSet', areaSet);
                    ctx.commit('updateSchoolSet', schoolSet);
                    let loader = true;
                    ctx.commit('load', loader);
                    //loader = true;
                })
                .catch(e => {
                    console.error(e);
                });
        }
    },
    mutations: {
        updateTeachers(state, teachers) {
            state.teachers = teachers
        },
        updateAreaSet(state, areaSet) {
            state.areaSet = areaSet
        },
        updateSchoolSet(state, schoolSet) {
            state.schoolSet = schoolSet
        },
        load(state, loader) {
            state.loader = loader
        }
    },
    state: {
        teachers: [],
        areaSet: null,
        schoolSet: null,
        loader: {}
    },
    getters: {
        dumpTeachers(state) {
            return state.teachers
        },
        getAreaSet(state) {
            return state.areaSet
        },
        getSchoolSet(state) {
            return state.schoolSet
        },
        getLoader(state) {
            return state.loader
        }
    }
}