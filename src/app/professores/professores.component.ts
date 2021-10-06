import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef?: BsModalRef;
  public professorForm!: FormGroup;
  public titulo = 'Professores';
  public professorSelecionado!: Professor;

  public professores = [
    { id: 1, nome: 'Maria',disciplina: 'Matemática' },
    { id: 2, nome: 'Claudia', disciplina: 'Física' },
    { id: 3, nome: 'Marcia', disciplina: 'Português' },
    { id: 4, nome: 'Jamile', disciplina: 'Inglês' },
    { id: 5, nome: 'Sergio', disciplina: 'Programação' },
  ];



  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
  }


  ngOnInit() {
  }

  criarForm(){
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['',Validators.required]
    });
  }

  professorSubmit() {
    console.log(this.professorForm.value);
  }

  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  voltar() {
    this.professorSelecionado = null as any;
  }



}
