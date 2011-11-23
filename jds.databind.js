/*
Copyright 2011 Jo�o Marcelo Fachinetto
Copyright 2011 Danimar Ribeiro
Copyright 2011 Willian Bonho Daiprai


Este arquivo � parte do programa JDataSource


JDataSource � um software livre; voc� pode redistribui-lo e/ou 
modifica-lo dentro dos termos da Licen�a P�blica Geral GNU como 
publicada pela Funda��o do Software Livre (FSF); na vers�o 2 da 
Licen�a, ou (na sua opni�o) qualquer vers�o.

Este programa � distribuido na esperan�a que possa ser  util, 
mas SEM NENHUMA GARANTIA; sem uma garantia implicita de ADEQUA��O a qualquer
MERCADO ou APLICA��O EM PARTICULAR. Veja a
Licen�a P�blica Geral GNU para maiores detalhes.
Voc� deve ter recebido uma c�pia da Licen�a P�blica Geral GNU
junto com este programa, se n�o, escreva para a Funda��o do Software

Livre(FSF) Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

*/

(function ($) {
    var methods = {
        init: function () {
            var Obj = $(this);
            if ($(this).is('select')) {
                DataBindSelect($(this));
            }
        },
        onSelectedItem: function (onSelectAction) {
            if (typeof (onSelectAction) === 'function') {
                if ($(this).is('select')) {
                    DataBindSelect($(this), onSelectAction);
                }
            }
        }
    };

    $.fn.DataBind = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else {
            if (typeof method === 'object' || !method) {
                return methods.init.apply(this, arguments);
            }
            else {
                $.error('Method' + method + 'does not exist on JQuery.DataBind');
            }
        }
    }
})(jQuery);