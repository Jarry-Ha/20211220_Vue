
<template>
    <div>
        <h5>Product Component</h5>
        <div>
            Today: {{new Date().toLocaleString()}}
        </div>
        <br>
        
        <div>
            <tree :subject="charts"></tree>
        </div>
    </div>
</template>

<script>
import Tree from './Tree.vue'

export default {
    name: 'product',
    components: { Tree },
    data : function() {
        return {
            charts : [{
                name : "(주) OpenSG", type:"company", 
                subject : [
                    { 
                        name: "SI 사업부", type:"division", 
                        subject : [
                            { name: "SI 1팀", type:"team" },
                            { name: "SI 2팀", type:"team" }
                        ] 
                    },
                    { 
                        name: "BI 사업부", type:"division",
                        subject : [
                            { name: "BI 1팀", type:"team" },
                            { name: "BI 2팀", type:"team" },
                            { name: "BI 3팀", type:"team" }
                        ]
                    },
                    { 
                        name: "솔루션 사업부", type:"division",
                        subject : [
                            { name: "ESM팀", type:"team" },
                            { name: "MTS팀", type:"team" },
                            { name: "ASF팀", type:"team" }
                        ]
                    },
                    { name: "총무팀", type:"team" },
                    { name: "인사팀", type:"team" }
                ]
            }]
        }
    }
}
</script>