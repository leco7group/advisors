<template>
    <div class="max-w-7xl grid grid-cols-1 lg:grid-cols-2 m-auto w-full h-full p-5">
        <div class="text-text flex flex-col justify-center items-start lg:order-1 order-2 mt-5 lg:mt-0">
            <p class="lg:text-7xl text-3xl text-center lg:text-left font-extralight">We assist your processes</p>
            <p class="lg:text-9xl text-7xl lg:text-left text-center mx-auto lg:mx-0 font-bold">In Malta</p>
            <img src="https://res.cloudinary.com/dyv3z8tnm/image/upload/v1669142761/Advisors/mancha-01_lfdicq.svg"
                alt="mancha" class=" h-10 mr-auto leading-none -mt-1">
            <p class="mt-5 leading-5 text-lg font-light text-center lg:text-left w-10/12 mx-auto lg:mx-0">Leco7 advisor,
                requirements and application process for visas and permits.</p>
            <div @click="this.modal = true"
                class="bg-primario text-white rounded-full text-lg font-light px-10 mt-5 py-3 mx-auto lg:mx-0 cursor-pointer">
                Get started</div>
        </div>
        <div class="flex justify-center items-center lg:order-2 order-1 relative">
            <img src="https://res.cloudinary.com/dyv3z8tnm/image/upload/v1672237061/Advisors/portada-copia-_1__speuk6.webp"
                alt="phone" class="hh z-10">
            <div class="h-3/6 w-full bg-primario bg-opacity-10 absolute bottom-0 z-0 rounded-3xl"></div>
        </div>

        <div v-if="this.modal"
            class="fixed h-screen w-screen top-0 right-0 bg-primario bg-opacity-80 z-50 flex justify-center items-center p-5 text-text">
            <div class="bg-white shadow-xl max-w-3xl w-full h-auto max-h-full rounded-2xl p-10 overflow-y-auto">
                <div v-if="this.step" class="flex flex-col justify-center items-center w-full gap-10">
                    <div class="flex justify-between items-center gap-5 w-full text-primario">
                        <p class="font-light lg:text-xl text-center  leading-tight mx-auto">Choose how you want to <span
                                class="font-bold">start the process</span></p>
                        <div @click="this.modal = false"
                            class="p-3 rounded-full bg-white text-primario text-xl flex justify-center items-center shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer">
                            <i class="fi fi-rr-cross-circle flex justify-center items-center"></i>
                        </div>
                    </div>
                    <div class="grid lg:grid-cols-2 w-full gap-3">

                        <router-link :to="{ hash: '#process' }" @click="resetStatus"
                            class="flex flex-col justify-center items-center bg-gray-100 rounded-lg gap-5 p-10 transform transition-all duration-500 hover:bg-primario hover:bg-opacity-5 hover:scale-105 hover:shadow-xl">
                            <img src="https://res.cloudinary.com/dyv3z8tnm/image/upload/v1672792244/Advisors/entrevista-online_tan55l.webp"
                                alt="Image" class="h-20">
                            <p class="text-primario font-light text-lg">Get started online</p>
                        </router-link>

                        <div class="flex flex-col justify-center items-center bg-gray-100 rounded-lg gap-5 p-10 transform transition-all duration-500 hover:bg-primario hover:bg-opacity-5 hover:scale-105 hover:shadow-xl cursor-pointer"
                            @click="this.step = false">
                            <img src="https://res.cloudinary.com/dyv3z8tnm/image/upload/v1672791777/Advisors/calendario_q0qwwe.webp"
                                alt="Image" class="h-20">
                            <p class="text-primario text-lg text-center leading-none font-light">Schedule an appointment
                            </p>
                        </div>

                    </div>
                </div>

                <div v-else class="flex flex-col w-full h-auto gap-5 overflow-y-auto">
                    <div class="text-primario flex items-center w-full justify-between gap-5 mb-2">
                        <p class="font-medium text-xl">Schedule an appointment with us</p>
                        <div @click="this.step = true"
                            class="p-3 rounded-full bg-white text-primario text-xl flex justify-center items-center shadow-lg hover:bg-primario hover:text-white transition-all duration-300 cursor-pointer">
                            <i class="fi fi-rr-arrow-small-left flex justify-center items-center"></i>
                        </div>
                    </div>

                    <p class="leading-tight font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Repellat error ex esse vel consectetur fugit ea velit. Reprehenderit odio voluptates est ullam,
                        sequi a ipsam dolore itaque qui eum! Fuga?</p>

                    <div class="grid lg:grid-cols-2 gap-5 ">
                        <label for="date"
                            class="w-full border-b border-primario flex flex-col items-start select-none cursor-pointer">
                            <label for="date" class="font-light text-primario">Select date</label>
                            <date-picker v-model:value="this.date" placeholder="Select date" class="sr-only"
                                :input-attr="this.selectDate" :disabled-date="notBeforeToday"
                                @change="selectDay"></date-picker>
                            <label for="date" class="flex w-full items-center justify-between px-2 py-3">
                                <p class="font-light one ">{{ this.fecha }}</p>
                                <i v-if="this.date === 'Select the date of your interest'"
                                    class="fi fi-rr-calendar flex justify-center items-center text-primario"></i>
                                <i @click=" this.text = 'Please select date and time of appointment', this.style = 'text-yellow-400', this.icon = 'fi-rr-exclamation' ,this.date = 'Select the date of your interest' " v-else
                                    class="fi fi-rr-cross-small flex justify-center items-center text-primario cursor-pointer"></i>
                            </label>
                        </label>
                        <label for="time"
                            class="w-full border-b border-primario flex flex-col items-start select-none cursor-pointer">
                            <label for="time" class="font-light text-primario">Select time</label>
                            <date-picker valueType="format" v-model:value="this.time"
                                :time-picker-options="this.settings" format="hh:mm a" type="time"
                                placeholder="Select time" class="sr-only" :input-attr="this.selectTime"
                                :disabled-time="notBeforeCurrentOClock" @change="selectHour"></date-picker>
                            <label for="time" class="flex w-full items-center justify-between px-2 py-3 cursor-pointer">
                                <p class="font-light one cursor-pointer">{{ this.time }}</p>
                                <i v-if="this.time === 'Select the time of your interest'"
                                    class="fi fi-rr-clock-three flex justify-center items-center text-primario"></i>
                                <i @click=" this.text = 'Please select date and time of appointment', this.icon = 'fi-rr-exclamation', this.style = 'text-yellow-400'  ,this.time = 'Select the time of your interest'" v-else
                                    class="fi fi-rr-cross-small flex justify-center items-center text-primario cursor-pointer"></i>
                            </label>
                        </label>
                    </div>

                    <div :class="this.style" class="flex w-full items-center gap-3 text-sm leading-none">
                        <i :class="this.icon" class="fi flex justify-center items-center"></i>
                        <p>{{ this.text }}</p>
                    </div>

                    <!-- <div>
                        <p></p>
                        <input type="text" v-model="this.address">
                    </div> -->

                </div>
            </div>
        </div>



    </div>
</template>
<script>
import { supabase } from '../../supabase/init';
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
export default {
    name: "Intro",
    components: {
        DatePicker
    },

    data() {
        return {
            icon: "fi-rr-exclamation",
            active: false,
            style: "text-yellow-400",
            address: "Madoninna 26, Is - swieqi",
            selectDate: {
                name: 'date',
                id: 'date',
                type: 'button'
            },
            selectTime: {
                name: 'time',
                id: 'time',
                type: 'button'
            },
            text: "Please select date and time of appointment",
            step: true,
            date: "Select the date of your interest",
            time: "Select the time of your interest",
            modal: false,
            settings: {
                start: '08:00',
                step: '00:30',
                end: '18:00',
            },
            sendData:{
                date: "",
                time: ""
            }
        }
    },

    created() {
        this.date = new Date(),
        this.selectDay()
    },


    methods: {

        selectHour(){
            let currentTime = this.time
            let sendTime = currentTime.replace(/ /g, '').replace(/:/g, '').toLowerCase()
            this.sendData.time = sendTime
            this.checkAvailability()
        },

        async checkAvailability(){
            let search = this.sendData.date + this.sendData.time
            console.log(search);
            if(this.sendData.date != "" && this.sendData.time != "" ){
                this.icon = "fi-rr-clock animate-spin"
                this.text = "Please give us a moment, we are validating"
                this.style = "text-yellow-400"
                try {
                    const { data, error } = await supabase
                    .from('appointments')
                    .select('id')
                    .eq('id', search )
                    console.log(data, error);
                    if(error) throw error
                    if(data.length != 0){
                        setTimeout(() => {
                            this.icon = "fi-rr-cross-circle"
                            this.text = "Oops, this date and time selection is not available, select other option"
                            this.style = "text-red-400"
                        }, 1500);
                    } else {
                        setTimeout(() => {
                            this.icon = "fi-rr-heart"
                            this.text = "Yes, we have availability for the selection you made."
                            this.style = "text-green-400"
                        }, 1500);
                    }
                } catch (error) {
                    if(error){
                        console.log(error);
                    }
                }
            } else {
                this.icon = "fi-rr-exclamation"
                this.text = "Please select date and time of appointment"
                this.style = "text-yellow-400"
            }
        },

        selectDay() {
            this.fecha = this.date.toDateString()
            let send = this.fecha
            let sendDate = send.replace(/ /g, '').toLowerCase()
            this.sendData.date = sendDate
            this.time = "Select the time of your interest"
        },

        notBeforeToday(date) {
            return date < new Date(new Date().setHours(0, 0, 0, 0));
        },

        notBeforeCurrentOClock(time) {
            let today = new Date();
            let todayParse = today.toDateString()
            let currentDay = this.date.toDateString()
            if (todayParse === currentDay) {
                let hour = today.getHours()
                let minutes = today.getMinutes()
                return time < new Date(time.getTime()).setHours(hour, minutes, 0, 0);
            } else {
                return time < new Date(time.getTime()).setHours(0, 0, 0, 0);
            }

        },

        resetStatus() {
                this.modal = false,
                this.date = "Select the date of your interest",
                this.time = "Select the time of your interest",
                this.step = true
        }
    },

}
</script>
<style scoped>
.date .mx-icon-calendar {
    @apply hidden !important;
}

.hh {
    height: 580px;
    -webkit-filter: drop-shadow(10px 10px 10px rgb(218, 218, 218));
    filter: drop-shadow(10px 10px 10px rgba(102, 102, 102, 0.377));
}

@media (max-width: 600px) {
    .hh {
        height: 100%;
        max-height: 380px;
    }
}
</style>