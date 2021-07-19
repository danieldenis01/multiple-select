$.fn.multipleSelect.locales['pt-BR'] = {
  formatSelectAll () {
    return '[Selecionar tudo]'
  },
  formatAllSelected () {
    return 'Todos selecionados'
  },
  formatCountSelected (count, total) {
    return count + ' de ' + total + ' selecionados'
  },
  formatNoMatchesFound () {
    return 'Nenhum resultado encontrado'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['pt-BR'])
