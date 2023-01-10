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
            <div class="bg-white shadow-xl max-w-3xl w-full h-auto max-h-full rounded-2xl overflow-y-auto">
                <div v-if="this.step" class="flex flex-col justify-center items-center w-full gap-10 p-10 ">
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

                <div v-else class="flex flex-col w-full h-auto gap-5 overflow-y-auto p-10">
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
                    
                <div class="w-full">
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
                        <div :class="this.style" class="flex w-full items-center gap-3 text-sm leading-none mt-3">
                        <i :class="this.icon" class="fi flex justify-center items-center"></i>
                        <p>{{ this.text }}</p>
                    </div>
                </div>

                <div class="grid lg:grid-cols-2 gap-5 text-text">
                    <div class="flex flex-col cursor-pointer relative">
                        <label for="correo" class="font-light text-primario">Email</label>
                        <div class="w-full flex relative">
                            <input  type="text" id="correo" class="border-b border-primario border-t-0 border-r-0 border-l-0 text-text font-light w-full" placeholder="youremail@email.com" v-model="this.sendBooking.email">
                            <div @click="getUser" v-if="this.validateButton || this.sendBooking.email == '' " class="rounded-full p-2 shadow-lg absolute right-0 text-primario hover:text-white hover:bg-green-400 transition-all duration-300">
                                <i  class="fi fi-rr-arrow-small-right flex justify-center items-center"></i>
                            </div>
                            <div @click="clean" v-else class="rounded-full p-2 shadow-lg absolute right-0 bg-red-400 text-white transition-all duration-300">
                                <i  class="fi fi-rr-trash flex justify-center items-center"></i>
                            </div>
                        </div>
                        <div v-if="this.alert != '' " class="absolute bg-white left-0 -bottom-8 shadow-2xl rounded-lg flex items-center font-light text-yellow-400 gap-2 px-4 py-3 ">
                            <i class="fi fi-rr-form flex items-center justify-center"></i>
                            <p class="text-sm">{{ this.alert }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col cursor-pointer">
                        <label for="number" class="font-light text-primario">Contact number</label>
                        <div class="w-full flex ">
                            <select :disabled="this.disabled"  v-model="this.sendBooking.code_contact" :class="this.classDisabled"  class=" border-b border-primario border-t-0 border-r-0 border-l-0 text-sm font-light one max-w-xs w-full">
                                <option value="" selected disabled>Country of contact </option>
                                <option v-for="(code, index) in this.codeContact" :key="index" :value="code.phone_code">{{ code.name }}</option>
                        </select>
                        <input :disabled="this.disabled" v-model="this.sendBooking.contact" :type="this.typeInput" id="number" :class="this.classDisabled"  class="border-b border-primario border-t-0 border-r-0 border-l-0 font-light" placeholder="999 99 999">
                        </div>
                    </div>
                </div>
                


                <div class="grid lg:grid-cols-2 gap-5 text-text">
                    <div class="flex flex-col cursor-pointer">
                        <label for="names" class="font-light text-primario">Names</label>
                        <input :disabled="this.disabled" v-model="this.sendBooking.names" type="text" id="names" :class="this.classDisabled" class="border-b  border-t-0 border-r-0 border-l-0 text-text font-light" placeholder="Maria Alejandra">
                    </div>
                    <div class="flex flex-col cursor-pointer">
                        <label for="last" class="font-light text-primario">Last names</label>
                        <input :disabled="this.disabled" v-model="this.sendBooking.last_names" type="text" id="last" :class="this.classDisabled"  class="border-b border-primario border-t-0 border-r-0 border-l-0 text-text font-light" placeholder="Manrique R.">
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center text-text gap-5">
                    <div class="flex flex-col">
                        <p class="w-auto leading-tight text-sm mb-3">Your appointment will be scheduled and we will send to your registered email address all the information of your reservation, we thank you very much for choosing us and we will be your helping hand in Malta.</p>
                        <p class="font-light text-xs">By scheduling your appointment you agree to the terms, conditions and use of data processing for commercial, internal and study purposes, for further information <a class="underline" href="https://google.com" target="_blank">click here.</a> </p>
                    </div>
                    <div class="w-full flex flex-col gap-3 text-center">
                        <button @click="sendInfo" class="w-full border border-primario bg-primario text-white py-3 px-2 rounded-lg hover:bg-green-400 hover:border-green-400 transition-all duration-300">Schedule an appointment</button>
                        <button class="w-full border border-red-500 text-red-500 p-2 rounded-lg text-sm hover:bg-red-500 hover:text-white transition-all duration-500 ">Cancel request</button>
                    </div>
                </div>
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
            userId: "",
            typeInput: "number",
            isUser: false,
            alert: "",
            validateButton: true,
            disabled: false,
            classDisabled: "border-gray-500",
            icon: "fi-rr-exclamation",
            active: false,
            style: "text-primario",
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
            step: false,
            date: "Select the date of your interest",
            time: "Select the time of your interest",
            modal: true,
            settings: {
                start: '08:00',
                step: '00:30',
                end: '18:00',
            },
            sendData:{
                date: "",
                time: ""
            },
            codeContact: [],
            sendBooking: {
                email: "",
                code_contact: "",
                contact: "",
                names: "",
                last_names: ""
            }
        }
    },

    created() {
        this.getContactCodes()
        this.date = new Date(),
        this.selectDay()
    },


    methods: {

        async sendInfo(){
            if(this.isUser){
                this.createBooking()
            } else {
                const { data, error } = await supabase.auth.signUp({
                    email: `${this.sendBooking.email}`,
                    password: `${this.sendBooking.contact}`
                })
                let id = data.user.id
                await this.registerUser(id)
            }
        },

        async registerUser(id){
            const { error } = await supabase
                .from('user')
                .insert(
                    { 
                        id: id, 
                        names: this.sendBooking.names,
                        last_names: this.sendBooking.last_names,
                        email: this.sendBooking.email,
                        contact_number: this.sendBooking.contact,
                        code_contact: this.sendBooking.code_contact
                    })
                    this.createBooking()
        },

       async createBooking(){
            const { error } = await supabase
                .from('appointments')
                .insert(
                    { 
                        id: this.sendData.date + this.sendData.time,
                        user_id: this.userId, 
                        date: this.fecha,
                        time: this.time
                    })
        },

        selectHour(){
            let currentTime = this.time
            let sendTime = currentTime.replace(/ /g, '').replace(/:/g, '').toLowerCase()
            this.sendData.time = sendTime
            this.checkAvailability()
        },

        async checkAvailability(){
            let search = this.sendData.date + this.sendData.time
            if(this.sendData.date != "" && this.sendData.time != "" ){
                this.icon = "fi-rr-clock animate-spin"
                this.text = "Please give us a moment, we are validating"
                this.style = "text-yellow-400"
                try {
                    const { data, error } = await supabase
                    .from('appointments')
                    .select('id')
                    .eq('id', search )
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

        async getContactCodes(){
            const { data, error } = await supabase
            .from('contact_codes')
            .select()
            .neq('phone_code', '')
            this.codeContact = data
        },

        async getUser(){
            this.validateButton = false
            if(this.sendBooking.email != "" ){
                try {
                const { data, error } = await supabase
                .from('user')
                .select()
                .eq('email', this.sendBooking.email)
                if(error) throw error
                let info = data[0]
                if(data.length != 0){
                    this.disabled = true,
                    this.classDisabled = "border-gray-500",
                    this.isUser = true
                    this.userId= info.id
                    this.sendBooking = {
                            email: info.email,
                            code_contact: info.code_contact,
                            contact: info.contact_number,
                            names: info.names,
                            last_names: info.last_names
                        }
                    } else{
                        this.isUser = false
                        this.alert = "Please enter the following data"
                        setTimeout(() => {
                            this.alert = ""
                        }, 3000);
                        this.disabled = false,
                        this.classDisabled = "border-primario"
                    }
                } catch (error) {
                    console.log(error);
                }
            } else {
                this.validateButton = true
                this.sendBooking = {
                            email: "",
                            code_contact: "",
                            contact: "",
                            names: "",
                            last_names: ""
                        }
            }
        },

        clean(){
            this.disabled = true,
            this.classDisabled = "border-gray-500",
            this.validateButton = true
            this.sendBooking = {
                            email: "",
                            code_contact: "",
                            contact: "",
                            names: "",
                            last_names: ""
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

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
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