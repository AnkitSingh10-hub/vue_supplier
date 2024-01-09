<template>
    <aside>
        <div class="relative">
            <input id="customInput" v-bind="$attrs" aria-describedby="outlined_success_help" :class="`block px-2.5 pb-2.5 pt-4 w-full text-base text-gray-[#b1b1b1] bg-transparent rounded-lg border-[1px] appearance-none focus:border-[#b1b1b1] border-[#b1b1b1] focus:outline-none focus:ring-0 peer ${errorMessage && '!border-[#ea2127]'
                } `" placeholder="" v-model="syncValue" />
            <label for="customInput" :class="`absolute text-sm bg-white text-black duration-300 transform -translate-y-4 scale-[0.9] top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[0.9] peer-focus:-translate-y-4 start-1 ${errorMessage && '!text-[#ea2127]'
                }`">{{ props.label }}</label>
        </div>
        <p id="outlined_error" :class="`text-xs text-red-400 duration-1000  ease-in-out transition-all ${errorMessage ? 'error' : 'success'
            } `">
            {{ errorRes }}
        </p>
    </aside>
</template>
<script lang="ts"></script>
<script setup lang="ts">
import { defineEmits, onMounted, ref, defineProps, computed } from 'vue'
import { useField } from 'vee-validate'
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: {
        type: [String, Number, Object],
        required: true
    },
    validator: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    }
})
const errorRes = ref('')
const syncValue = computed({
    get() {
        return value.value
    },
    set(data) {
        value.value = data
        setTimeout(() => {
            if (!errorMessage.value) return (errorRes.value = '')
            errorRes.value = errorMessage.value
        }, 500)
        emit('update:modelValue', data)
    }
})

const { value, errorMessage } = useField(props.label, props.validator)

onMounted(() => {
    if (props.modelValue) value.value = props.modelValue
})
</script>
  
<style scoped>
.error {
    margin-top: 8px;
}

.success {
    margin-top: 0px;
}
</style>
  