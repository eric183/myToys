
/**
 * Created by kuangkuang
 */

function BrowserMqtt() {
    return this.client;
};

BrowserMqtt.prototype.connect = function(url, callback) {
    this.client = mqtt.connect(url);
    if (callback) {
        callback();
    }
};

BrowserMqtt.prototype.sub = function(topic, callback) {
    var _this = this;
    this.client.subscribe(topic);
    if (Array.isArray(topic)) {
        topic.forEach(function(i) {
            _this.client.subscribe(topic)
        });
    };
    if (callback) {
        callback(topic);
    };
};

BrowserMqtt.prototype.on = function(type, callback) {
    this.client.on(type, callback);
};


BrowserMqtt.prototype.publish = function(topic, payload) {
    this.client.publish(topic, payload)
};

BrowserMqtt.prototype.post = function(url, data, callback) {
    $.ajax({
        url: url,
        method: 'POST',
        dataType: 'json',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function(jsonResult) {
            if (jsonResult.code === 0) {
                callback(jsonResult);
            } else {
                alert(jsonResult.code + ':' + jsonResult.error);
            }
        }
    })
};

BrowserMqtt.prototype.close = function() {
    this.client.end();
}
