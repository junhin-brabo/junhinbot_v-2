const ttthelp = (prefix) => {
    return `
「 \u{1F4AE} junhin bot \u{1F4AE} 」
◪ BETA, EVITE USAR

◪ APENAS PARA GRUPOS

◪ INICIAR
  │
  ├─ ❏ Para iniciar digite:
  │     └「 ${prefix}ttt [ DIFICULDADE ] 」
  └─ ❏ Apenas uma pessoa por vez

◪ DIFICULDADE
  │
  ├─ ❏ easy : totalmente aleatório
  │     (Só o junhin pra perder nessa)
  ├─ ❏ normal : 66% de chance 
  │     de bloqueio e vitória
  ├─ ❏ hard : 100% de chance 
  │     de bloqueio e vitória 
  └─ ❏ impossible : Só o junhin
           pra vencer isso, oh brabo

◪ COMANDOS
  │
  ├─ ❏ Para marcar digite:
  │     └「 ${prefix}coord [ COORDENADA ] 」
  │
  └─ ❏ Exemplo:
	        └「   ${prefix}coord a1 
	               ----------------------
	               🌀1️⃣2️⃣3️⃣
	               🅰️❌🔲🔲
	               🅱️🔲🔲🔲
	               ©️🔲🔲🔲  」

◪ SEU STATUS
  │
  └─ ❏ Para ver seu status digite:
          └「 ${prefix}tttme 」

◪ RECOMPENSAS
  │
  ├─ ❏ EASY
  │     ├ Vitória : +「 25 / 50 」
  │     └ Derrota : -「 200 / 200 」
  │
  ├─ ❏ NORMAL
  │     ├ Vitória : +「 75 / 150 」
  │     └ Derrota : -「 75 / 150 」
  │
  ├─ ❏ HARD
  │     ├ Vitória : +「 200 / 400 」
  │     └ Derrota : -「 25 / 50 」
  │
  ├─ ❏ IMPOSSIBLE
  │     ├ Vitória : +「 1000 / 2000 」
  │     └ Derrota : -「 0 / 0 」
  │
  ├─ ❏ EMPATE
  │     └「 0 / 0 」
  │ 
  └─ ❏ PARTIDA NÃO FINALIZADA
          └ -「 75 / 150 」
          
   *MODO JOGO DA VELHA X1⚔*       
   .jogodavelha (marque a pessoa)
   .resetavelha (reseta o jogo da velha x1)
`
}

exports.ttthelp = ttthelp
