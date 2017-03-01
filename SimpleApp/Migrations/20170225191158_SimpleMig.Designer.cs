using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Core.Data;

namespace SimpleApp.Migrations
{
    [DbContext(typeof(DataAccessContext))]
    [Migration("20170225191158_SimpleMig")]
    partial class SimpleMig
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Common.Entity.Company", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code");

                    b.Property<string>("Contact");

                    b.Property<string>("Name");

                    b.Property<string>("OrgIdentifier");

                    b.Property<string>("OrgType");

                    b.Property<string>("Phone");

                    b.Property<string>("Street");

                    b.Property<string>("ZipCity");

                    b.HasKey("Id");

                    b.ToTable("Companies");
                });

            modelBuilder.Entity("Common.Entity.SieAccount", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<long?>("CompanyId");

                    b.Property<long?>("ImportId");

                    b.Property<string>("Name");

                    b.Property<string>("Number");

                    b.Property<string>("Type");

                    b.Property<string>("Unit");

                    b.HasKey("Id");

                    b.HasIndex("CompanyId");

                    b.HasIndex("ImportId");

                    b.ToTable("SieAccounts");
                });

            modelBuilder.Entity("Common.Entity.SieBookingYear", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("BookyearId");

                    b.Property<long?>("CompanyId");

                    b.Property<DateTime?>("End")
                        .HasColumnType("date");

                    b.Property<long?>("ImportId");

                    b.Property<DateTime?>("Start")
                        .HasColumnType("date");

                    b.HasKey("Id");

                    b.HasIndex("CompanyId");

                    b.HasIndex("ImportId");

                    b.ToTable("SieBookingYears");
                });

            modelBuilder.Entity("Common.Entity.SieFileImport", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccountsCount");

                    b.Property<int>("BookingYearsCount");

                    b.Property<long?>("CompanyId");

                    b.Property<DateTime>("LastModified");

                    b.Property<string>("Name");

                    b.Property<int>("Status");

                    b.Property<int>("VoucherRowsCount");

                    b.Property<int>("VouchersCount");

                    b.HasKey("Id");

                    b.HasIndex("CompanyId");

                    b.ToTable("SieFileImports");
                });

            modelBuilder.Entity("Common.Entity.SieVoucher", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<long?>("CompanyId");

                    b.Property<string>("CreatedBy");

                    b.Property<int>("CreatedDate");

                    b.Property<long?>("ImportId");

                    b.Property<string>("Number");

                    b.Property<string>("Series");

                    b.Property<string>("Text");

                    b.Property<string>("Token");

                    b.Property<DateTime>("VoucherDate");

                    b.HasKey("Id");

                    b.HasIndex("CompanyId");

                    b.HasIndex("ImportId");

                    b.ToTable("Vouchers");
                });

            modelBuilder.Entity("Common.Entity.SieVoucherRow", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<long?>("AccountId");

                    b.Property<decimal>("Amount");

                    b.Property<long?>("CompanyId");

                    b.Property<string>("CreatedBy");

                    b.Property<long?>("ImportId");

                    b.Property<DateTime>("RowDate");

                    b.Property<string>("Text");

                    b.Property<string>("Token");

                    b.HasKey("Id");

                    b.HasIndex("AccountId");

                    b.HasIndex("CompanyId");

                    b.HasIndex("ImportId");

                    b.ToTable("VoucherRows");
                });

            modelBuilder.Entity("Common.Entity.SieAccount", b =>
                {
                    b.HasOne("Common.Entity.Company", "Company")
                        .WithMany()
                        .HasForeignKey("CompanyId");

                    b.HasOne("Common.Entity.SieFileImport", "Import")
                        .WithMany()
                        .HasForeignKey("ImportId");
                });

            modelBuilder.Entity("Common.Entity.SieBookingYear", b =>
                {
                    b.HasOne("Common.Entity.Company", "Company")
                        .WithMany()
                        .HasForeignKey("CompanyId");

                    b.HasOne("Common.Entity.SieFileImport", "Import")
                        .WithMany()
                        .HasForeignKey("ImportId");
                });

            modelBuilder.Entity("Common.Entity.SieFileImport", b =>
                {
                    b.HasOne("Common.Entity.Company", "Company")
                        .WithMany()
                        .HasForeignKey("CompanyId");
                });

            modelBuilder.Entity("Common.Entity.SieVoucher", b =>
                {
                    b.HasOne("Common.Entity.Company", "Company")
                        .WithMany()
                        .HasForeignKey("CompanyId");

                    b.HasOne("Common.Entity.SieFileImport", "Import")
                        .WithMany()
                        .HasForeignKey("ImportId");
                });

            modelBuilder.Entity("Common.Entity.SieVoucherRow", b =>
                {
                    b.HasOne("Common.Entity.SieAccount", "Account")
                        .WithMany()
                        .HasForeignKey("AccountId");

                    b.HasOne("Common.Entity.Company", "Company")
                        .WithMany()
                        .HasForeignKey("CompanyId");

                    b.HasOne("Common.Entity.SieFileImport", "Import")
                        .WithMany()
                        .HasForeignKey("ImportId");
                });
        }
    }
}
