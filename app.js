// One-time purchases
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
                'Transaction completed by ' + details.payer.name.given_name + '!';
        });
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
                'Transaction completed by ' + details.payer.name.given_name + '!';
        });
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
                'Transaction completed by ' + details.payer.name.given_name + '!';
        });
    }
}).render('#paypal-button-container-neuroedge-ai-ultimate');

// Subscriptions
paypal.Buttons({
    createSubscription: function(data, actions) {
        return actions.subscription.create({
            plan_id: 'PLAN_ID_HERE_BASIC'
        });
    },
    onApprove: function(data, actions) {
        document.getElementById('result-message-sub-basic').innerText = 'Subscription activated for Basic plan!';
    }
}).render('#paypal-button-container-sub-basic');

paypal.Buttons({
    createSubscription: function(data, actions) {
        return actions.subscription.create({
            plan_id: 'PLAN_ID_HERE_PRO'
        });
    },
    onApprove: function(data, actions) {
        document.getElementById('result-message-sub-pro').innerText = 'Subscription activated for Pro plan!';
    }
}).render('#paypal-button-container-sub-pro');

paypal.Buttons({
    createSubscription: function(data, actions) {
        return actions.subscription.create({
            plan_id: 'PLAN_ID_HERE_ULTIMATE'
        });
    },
    onApprove: function(data, actions) {
        document.getElementById('result-message-sub-ultimate').innerText = 'Subscription activated for Ultimate plan!';
    }
}).render('#paypal-button-container-sub-ultimate');