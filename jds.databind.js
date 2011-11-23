/*
Copyright 2011 João Marcelo Fachinetto
Copyright 2011 Danimar Ribeiro
Copyright 2011 Willian Bonho Daiprai


Este arquivo é parte do programa JDataSource


JDataSource é um software livre; você pode redistribui-lo e/ou 
modifica-lo dentro dos termos da Licença Pública Geral GNU como 
publicada pela Fundação do Software Livre (FSF); na versão 2 da 
Licença, ou (na sua opnião) qualquer versão.

Este programa é distribuido na esperança que possa ser  util, 
mas SEM NENHUMA GARANTIA; sem uma garantia implicita de ADEQUAÇÂO a qualquer
MERCADO ou APLICAÇÃO EM PARTICULAR. Veja a
Licença Pública Geral GNU para maiores detalhes.
Você deve ter recebido uma cópia da Licença Pública Geral GNU
junto com este programa, se não, escreva para a Fundação do Software

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