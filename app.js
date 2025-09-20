/***************************************************
 * PayPal Integration - NeuroEdge AI Marketplace
 * -------------------------------------------------
 * IMPORTANT:
 * 1. Replace `YOUR-LIVE-CLIENT-ID` in index.html
 *    with your PayPal LIVE client ID from:
 *    https://developer.paypal.com/dashboard/applications
 *
 * 2. Replace PLAN_ID placeholders below with your
 *    LIVE plan IDs from:
 *    PayPal Dashboard → Pay & Get Paid → Subscriptions → Plans
 ***************************************************/

// ------------------- One-time Purchases -------------------
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '199.00',
                    currency_code: 'USD'
                },
                description: 'NeuroEdge AI - Entry-level AI-powered MT5 EA'
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            document.getElementById('result-message-neuroedge-ai').innerText = 
                'Transaction completed by ' + (details.payer.name.given_name || 'Customer') + '!';
        }).catch(function(err) {
            console.error('Capture error:', err);
            document.getElementById('result-message-neuroedge-ai').innerText = 'Payment failed. Please try again.';
        });
    },
    onError: function(err) {
        console.error('PayPal error:', err);
        document.getElementById('result-message-neuroedge-ai').innerText = 'An error occurred. Check console.';
    }
}).render('#paypal-button-container-neuroedge-ai');

paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '399.00',
                    currency_code: 'USD'
                },
                description: 'NeuroEdge AI Pro - Advanced AI-powered MT5 EA'
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            document.getElementById('result-message-neuroedge-ai-pro').innerText = 
                'Transaction completed by ' + (details.payer.name.given_name || 'Customer') + '!';
        }).catch(function(err) {
            console.error('Capture error:', err);
            document.getElementById('result-message-neuroedge-ai-pro').innerText = 'Payment failed. Please try again.';
        });
    },
    onError: function(err) {
        console.error('PayPal error:', err);
        document.getElementById('result-message-neuroedge-ai-pro').innerText = 'An error occurred. Check console.';
    }
}).render('#paypal-button-container-neuroedge-ai-pro');

paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '699.00',
                    currency_code: 'USD'
                },
                description: 'NeuroEdge AI Ultimate - Premium AI-powered MT5 EA'
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            document.getElementById('result-message-neuroedge-ai-ultimate').innerText = 
                'Transaction completed by ' + (details.payer.name.given_name || 'Customer') + '!';
        }).catch(function(err) {
            console.error('Capture error:', err);
            document.getElementById('result-message-neuroedge-ai-ultimate').innerText = 'Payment failed. Please try again.';
        });
    },
    onError: function(err) {
        console.error('PayPal error:', err);
        document.getElementById('result-message-neuroedge-ai-ultimate').innerText = 'An error occurred. Check console.';
    }
}).render('#paypal-button-container-neuroedge-ai-ultimate');


// ------------------- Subscriptions -------------------
// NOTE: Replace each PLAN_ID with your LIVE Plan ID
// from your PayPal Dashboard (NOT Sandbox)

paypal.Buttons({
    createSubscription: function(data, actions) {
        return actions.subscription.create({
            plan_id: 'P-4H345618GE642320BNDHGWJA'  // Basic $39/month
        });
    },
    onApprove: function(data, actions) {
        document.getElementById('result-message-sub-basic').innerText = 
            'Subscription activated for Basic plan! ID: ' + data.subscriptionID;
        console.log('Subscription approved:', data);
    },
    onError: function(err) {
        console.error('PayPal subscription error (Basic):', err);
        document.getElementById('result-message-sub-basic').innerText = 'An error occurred. Check console.';
    },
    onCancel: function(data) {
        console.log('Subscription canceled (Basic):', data);
        document.getElementById('result-message-sub-basic').innerText = 'Subscription canceled.';
    }
}).render('#paypal-button-container-sub-basic');

paypal.Buttons({
    createSubscription: function(data, actions) {
        return actions.subscription.create({
            plan_id: 'P-3AB04862PL207104TNDHGUZA'  // Pro $79/month
        });
    },
    onApprove: function(data, actions) {
        document.getElementById('result-message-sub-pro').innerText = 
            'Subscription activated for Pro plan! ID: ' + data.subscriptionID;
        console.log('Subscription approved:', data);
    },
    onError: function(err) {
        console.error('PayPal subscription error (Pro):', err);
        document.getElementById('result-message-sub-pro').innerText = 'An error occurred. Check console.';
    },
    onCancel: function(data) {
        console.log('Subscription canceled (Pro):', data);
        document.getElementById('result-message-sub-pro').innerText = 'Subscription canceled.';
    }
}).render('#paypal-button-container-sub-pro');

paypal.Buttons({
    createSubscription: function(data, actions) {
        return actions.subscription.create({
            plan_id: 'P-6N9864857H046771GNDHE7ZY'  // Ultimate $129/month
        });
    },
    onApprove: function(data, actions) {
        document.getElementById('result-message-sub-ultimate').innerText = 
            'Subscription activated for Ultimate plan! ID: ' + data.subscriptionID;
        console.log('Subscription approved:', data);
    },
    onError: function(err) {
        console.error('PayPal subscription error (Ultimate):', err);
        document.getElementById('result-message-sub-ultimate').innerText = 'An error occurred. Check console.';
    },
    onCancel: function(data) {
        console.log('Subscription canceled (Ultimate):', data);
        document.getElementById('result-message-sub-ultimate').innerText = 'Subscription canceled.';
    }
}).render('#paypal-button-container-sub-ultimate');