<template>
    <div class="flex justify-center items-center h-screen w-full ">
        <stripe-checkout
        ref="checkoutRef"
        mode="payment"
        :pk="publishableKey"
        :line-items="lineItems"
        :clientReferenceId="idClient"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="v => loading = v"
        />
        <button @click="submit" class="bg-primario px-5 py-2 rounded-full text-white">Pay now!</button>
    </div>
</template>
<script>
    import { StripeCheckout } from '@vue-stripe/vue-stripe';
    export default {
    components: {
    StripeCheckout,
    },
    data () {
    this.publishableKey = "pk_test_51MFkrsJjT28M1AEHCPErBacSh2OGSdoqjGdYFiXMFBY1BYVq3fFXWwp4BQqXlLYq4NtfiN8FlYclUWB6SMk4fMRR00p5LPQs7Q";
    const clientId = "5d87fb59-f306-4185-bfa9-f263d1dfcb18"
    return {
        loading: false,
        lineItems: [
        {
            price: "price_1MFlc6JjT28M1AEH9w5Fnath", 
            quantity: 1
        },
        ],
        successURL: "http://localhost:8080/enviado/" + clientId,
        cancelURL: 'http://localhost:8080/cancelado',
    };
    },
    methods: {
    submit () {
        // You will be redirected to Stripe's secure checkout page
        console.log(this.$refs.checkoutRef.redirectToCheckout())
        
    },
    },
    };
</script>
<style scoped>
    
</style>