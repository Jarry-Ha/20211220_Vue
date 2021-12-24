<template>
    <div>
        <h3>A04 Slot</h3>

        <div>This is A04 Slot</div>
        
        이 위치에 상위 컴퍼넌트의 내용이 포함된다.<br>
        <slot>전달한 값이 없으면, 기본값으로 이 내용이 표시된다. (필수는 아님. 필요에 따라 설정)</slot>
    </div>
</template>

<script>
export default {

}
</script>
