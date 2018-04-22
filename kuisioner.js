function Game()
{
	function Question(question, answers, correct)
	{
		this.question = question;
		this.answers = answers;
		this.correct = correct; 
	}

	Question.prototype.displayQuestion = function()
	{
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++)
		{
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans)
	{
		if (ans === this.correct)
		{
			Skor_Akhir += 1;
			console.log('Jawaban anda BENAR!!');
			console.log('');
		}
		else
		{
			console.log('Jawaban anda SALAH!! Coba lagi!');
			Salah_Jawab +=1;
			console.log('');
		}
	}

	var ql = new Question('Apakah anda menyukai tentang JavaScript?',
	['Ya', 'Tidak'],
	'0'); 
	var q2 = new Question('Apakah matakuliah ini menyenangkan?',
	['Ya', 'Tidak'],
	'1');
	var q3 = new Question('Suasana kelas pada saat matkul ini?',
	['Membosankan', 'Menyenangkan', 'Menjengkelkan'],
	'1');
	var q4 = new Question('Perasaan anda menjadi anak IT?',
	['bangga','senang','biasa aja'],
	'3');
	var q5 = new Question('Apa yang anda senangi dari matkul ini?',
	['coding', 'dosen'],
	'0');
    var q6 = new Question('Matkul ini mengajarkan kita untuk?',
	['Bersabar dalam menghadapi coding', 'Lebih kiat belajar'],
	'1');
    var q7 = new Question('Kata yang tepat mendeskripsikan coding ?',
	['Menyenangkan', 'Tidak Menyenangkan'],
	'0');
    var q8 = new Question('Dalam matkul ini selalu berangkat?',
	['Pagi', 'telat'],
	'0');
    var q9 = new Question('Cita-cita menjadi'?',
	['Programer', 'Tukang servis laptop'],
	'1');
    var q10 = new Question('Mengerjakan tugas selalu dalam keadaan?',
	['Kepepet', 'Tepat waktu'],
	'0');
    
    
	var questions = [ql, q2, q3, q4, q5, q6, q7, q8, q9, q10];
	var Skor_Akhir = 0;
	var Salah_Jawab = 0;
	var Jumlah_Pertanyaan = 0;
		
	Berhenti:
	{
		for (;;)
		{
			var n = Math.floor(Math.random() * questions.length);

			questions[n].displayQuestion();

			var answer = prompt('Pilih jawaban yang benar!');

			if (answer == 'Exit')
			{
				console.log('');
				console.log('---Keluar Dari Permainan---');
				console.log('');
				console.log('Jumlah pertanyaan yang di jawab = ' + Jumlah_Pertanyaan);
				console.log('Jumlah jawaban yang salah = ' + Salah_Jawab);
				console.log('Skor akhir anda = ' + Skor_Akhir);
				break Berhenti;
			}

			Jumlah_Pertanyaan += 1 ;
			questions[n].checkAnswer(answer);
		}
	}
};