package com.sabrina.processoseletivo.entities;

import java.util.Date;
import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import com.sabrina.processoseletivo.consts.MessagesKeys;
import lombok.Data;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.persistence.TemporalType;

@Data
@Entity
@Table(name = "candidato")
public class CandidatoEntity {

    @Id
    @NotNull(message = MessagesKeys.VALIDATION_UUID_NOTNULL)
    private UUID id;

    @NotEmpty(message = MessagesKeys.VALIDATION_NOME_NOTNULL)
    @Size(min = 1, max = 255, message = MessagesKeys.VALIDATION_NOME_SIZE)
    private String nome;

    @NotEmpty(message = MessagesKeys.VALIDATION_CPF_NOTNULL)
    @Size(min = 1, max = 50, message = MessagesKeys.VALIDATION_CPF_SIZE)
    private String cpf;

    @NotEmpty(message = MessagesKeys.VALIDATION_EMAIL_NOTNULL)
    @Size(min = 1, max = 255, message = MessagesKeys.VALIDATION_EMAIL_SIZE)
    private String email;

    @Column(columnDefinition = "timestamp with time zone")
    @NotEmpty(message = MessagesKeys.VALIDATION_DATA_NASC_NOTNULL)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dataNascimento;

    @NotEmpty(message = MessagesKeys.VALIDATION_CIDADE_NOTNULL)
    @Size(min = 1, max = 50, message = MessagesKeys.VALIDATION_CIDADE_SIZE)
    private String cidade;

    @NotEmpty(message = MessagesKeys.VALIDATION_CURRICULO_NOTNULL)
    @Size(min = 1, max = 255, message = MessagesKeys.VALIDATION_CURRICULO_SIZE)
    private String curriculo;

    private String linkRepositorio;

    @NotNull
    private UUID status;

    @Column(columnDefinition = "timestamp with time zone")
    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedOn;

    @Column(columnDefinition = "timestamp with time zone")
    @Temporal(TemporalType.TIMESTAMP)
    private Date removedOn;

}