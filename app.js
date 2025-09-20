// One-time purchases (no changes needed, but added error handling)
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

// Subscriptions - Enhanced with capture and error handling
// Replace PLAN_IDs if invalid/expired
paypal.Buttons({
    createSubscription: function(data, actions) {
        return actions.subscription.create({
            plan_id: 'P-4H345618GE642320BNDHGWJA'  // Basic Plan ID - Verify in Dashboard
        });
    },
    onApprove: function(data, actions) {
        return actions.subscription.capture().then(function(details) {
            document.getElementById('result-message-sub-basic').innerText = 
                'Subscription activated for Basic plan! ID: ' + data.subscriptionID;
            console.log('Subscription details:', details);
        }).catch(function(err) {
            console.error('Subscription capture error:', err);
            document.getElementById('result-message-sub-basic').innerText = 'Subscription failed. Please try again.';
        });
    },
    onError: function(err) {
        console.error('PayPal subscription error:', err);
        document.getElementById('result-message-sub-basic').innerText = 'An error occurred. Check console.';
    },
    onCancel: function(data) {
        console.log('Subscription canceled:', data);
        document.getElementById('result-message-sub-basic').innerText = 'Subscription canceled.';
    }
}).render('#paypal-button-container-sub-basic');

paypal.Buttons({
    createSubscription: function(data, actions) {
        return actions.subscription.create({
            plan_id: 'P-3AB04862PL207104TNDHGUZA'  // Pro Plan ID - Verify in Dashboard
        });
    },
    onApprove: function(data, actions) {
        return actions.subscription.capture().then(function(details) {
            document.getElementById('result-message-sub-pro').innerText = 
                'Subscription activated for Pro plan! ID: ' + data.subscriptionID;
            console.log('Subscription details:', details);
        }).catch(function(err) {
            console.error('Subscription capture error:', err);
            document.getElementById('result-message-sub-pro').innerText = 'Subscription failed. Please try again.';
        });
    },
    onError: function(err) {
        console.error('PayPal subscription error:', err);
        document.getElementById('result-message-sub-pro').innerText = 'An error occurred. Check console.';
    },
    onCancel: function(data) {
        console.log('Subscription canceled:', data);
        document.getElementById('result-message-sub-pro').innerText = 'Subscription canceled.';
    }
}).render('#paypal-button-container-sub-pro');

paypal.Buttons({
    createSubscription: function(data, actions) {
        return actions.subscription.create({
            plan_id: 'P-6N9864857H046771GNDHE7ZY'  // Ultimate Plan ID - Verify in Dashboard
        });
    },
    onApprove: function(data, actions) {
        return actions.subscription.capture().then(function(details) {
            document.getElementById('result-message-sub-ultimate').innerText = 
                'Subscription activated for Ultimate plan! ID: ' + data.subscriptionID;
            console.log('Subscription details:', details);
        }).catch(function(err) {
            console.error('Subscription capture error:', err);
            document.getElementById('result-message-sub-ultimate').innerText = 'Subscription failed. Please try again.';
        });
    },
    onError: function(err) {
        console.error('PayPal subscription error:', err);
        document.getElementById('result-message-sub-ultimate').innerText = 'An error occurred. Check console.';
    },
    onCancel: function(data) {
        console.log('Subscription canceled:', data);
        document.getElementById('result-message-sub-ultimate').innerText = 'Subscription canceled.';
    }
}).render('#paypal-button-container-sub-ultimate');