paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '99.00',
                    currency_code: 'USD'
                },
                description: 'NeuroEdge AI - Entry-level AI-powered EA'
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
                    value: '199.00',
                    currency_code: 'USD'
                },
                description: 'NeuroEdge AI Pro - Advanced AI-powered EA'
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
                    value: '299.00',
                    currency_code: 'USD'
                },
                description: 'NeuroEdge AI Ultimate - Premium AI-powered EA'
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