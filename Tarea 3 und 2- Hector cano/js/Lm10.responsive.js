(function($) {
    $.widget("custom.responsive", {
        widgetEventPrefix: "Lm10",
        
        options: {
            Lm10Width: 1000,
            Lm10Height: 600,
            auto: true,
            Lm10Delay: 1111111000,
        },

        _create: function() {
            this.element.css("padding", "0");
            this.contenedor = this.element;
            this._build();
            this._buildButtonBar();
            this._setSize();
        },

        _setSize: function() {
            this.options.Lm10Width = this.contenedor.outerWidth(false);
            this.options.Lm10Height = this.contenedor.outerHeight(false);
        },

        _build: function() {
            var _Lm10 = this;
            _Lm10.Lm10 = _Lm10.contenedor.find("li");
            _Lm10._setSize();

            _Lm10.contenedor.addClass("responsiveLm10_Ul")
                .width(_Lm10.options.Lm10Width)
                .height(_Lm10.options.Lm10Height);

            _Lm10.Lm10.addClass("responsiveLm10_Li")
                .width(_Lm10.options.Lm10Width)
                .height(_Lm10.options.Lm10Height);

            _Lm10.Lm10Container = $("<div class='responsiveLm10_Lm10Container'></div>");
            _Lm10.contenedor.before(_Lm10.Lm10Container);
            _Lm10.Lm10Container.append(_Lm10.contenedor)
                .width(_Lm10.options.Lm10Width)
                .height(_Lm10.options.Lm10Height);

            _Lm10.setTimer();
        },

        _buildButtonBar: function() {
            var _Lm10 = this;
            // Aquí puedes agregar el código para crear la botonera
        },

        setTimer: function() {
            var _Lm10 = this;
            if (_Lm10.options.auto) {
                _Lm10.timerInterval = setInterval(function() {
                    alert("hello");
                }, _Lm10.options.Lm10Delay);
            }
        },

        _destroy: function() {
            clearInterval(this.timerInterval);
        }
    });
})(jQuery);
