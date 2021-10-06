import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef?: BsModalRef;
  public alunoForm!: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado!: Aluno;


  public alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Kent', telefone: '332255' },
    { id: 2, nome: 'Paula', sobrenome: 'Isabela', telefone: '332145' },
    { id: 3, nome: 'Laura', sobrenome: 'Antonia', telefone: '458521' },
    { id: 4, nome: 'Luiza', sobrenome: 'Machado', telefone: '331147' },
    { id: 5, nome: 'Lucas', sobrenome: 'Alvares', telefone: '789654' },
    { id: 6, nome: 'Pedro', sobrenome: 'Maria', telefone: '698752' },
    { id: 7, nome: 'Paulo', sobrenome: 'José', telefone: '459632' },
  ];


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
  }

  ngOnInit(): void {
  }

 criarForm(){
   this.alunoForm = this.fb.group({
    nome: ['', Validators.required],
    sobrenome: ['', Validators.required],
    telefone: ['', Validators.required]
   });
 }

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = null as any;
  }


}
