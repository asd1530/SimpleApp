using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SimpleApp.Migrations
{
    public partial class SimpleMig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Companies",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: true),
                    Contact = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    OrgIdentifier = table.Column<string>(nullable: true),
                    OrgType = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    Street = table.Column<string>(nullable: true),
                    ZipCity = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companies", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SieFileImports",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AccountsCount = table.Column<int>(nullable: false),
                    BookingYearsCount = table.Column<int>(nullable: false),
                    CompanyId = table.Column<long>(nullable: true),
                    LastModified = table.Column<DateTime>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Status = table.Column<int>(nullable: false),
                    VoucherRowsCount = table.Column<int>(nullable: false),
                    VouchersCount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SieFileImports", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SieFileImports_Companies_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Companies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SieAccounts",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CompanyId = table.Column<long>(nullable: true),
                    ImportId = table.Column<long>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Number = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    Unit = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SieAccounts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SieAccounts_Companies_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Companies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SieAccounts_SieFileImports_ImportId",
                        column: x => x.ImportId,
                        principalTable: "SieFileImports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SieBookingYears",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BookyearId = table.Column<int>(nullable: false),
                    CompanyId = table.Column<long>(nullable: true),
                    End = table.Column<DateTime>(type: "date", nullable: true),
                    ImportId = table.Column<long>(nullable: true),
                    Start = table.Column<DateTime>(type: "date", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SieBookingYears", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SieBookingYears_Companies_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Companies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SieBookingYears_SieFileImports_ImportId",
                        column: x => x.ImportId,
                        principalTable: "SieFileImports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Vouchers",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CompanyId = table.Column<long>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreatedDate = table.Column<int>(nullable: false),
                    ImportId = table.Column<long>(nullable: true),
                    Number = table.Column<string>(nullable: true),
                    Series = table.Column<string>(nullable: true),
                    Text = table.Column<string>(nullable: true),
                    Token = table.Column<string>(nullable: true),
                    VoucherDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vouchers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Vouchers_Companies_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Companies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Vouchers_SieFileImports_ImportId",
                        column: x => x.ImportId,
                        principalTable: "SieFileImports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "VoucherRows",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AccountId = table.Column<long>(nullable: true),
                    Amount = table.Column<decimal>(nullable: false),
                    CompanyId = table.Column<long>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    ImportId = table.Column<long>(nullable: true),
                    RowDate = table.Column<DateTime>(nullable: false),
                    Text = table.Column<string>(nullable: true),
                    Token = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VoucherRows", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VoucherRows_SieAccounts_AccountId",
                        column: x => x.AccountId,
                        principalTable: "SieAccounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_VoucherRows_Companies_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Companies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_VoucherRows_SieFileImports_ImportId",
                        column: x => x.ImportId,
                        principalTable: "SieFileImports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SieAccounts_CompanyId",
                table: "SieAccounts",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_SieAccounts_ImportId",
                table: "SieAccounts",
                column: "ImportId");

            migrationBuilder.CreateIndex(
                name: "IX_SieBookingYears_CompanyId",
                table: "SieBookingYears",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_SieBookingYears_ImportId",
                table: "SieBookingYears",
                column: "ImportId");

            migrationBuilder.CreateIndex(
                name: "IX_SieFileImports_CompanyId",
                table: "SieFileImports",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_Vouchers_CompanyId",
                table: "Vouchers",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_Vouchers_ImportId",
                table: "Vouchers",
                column: "ImportId");

            migrationBuilder.CreateIndex(
                name: "IX_VoucherRows_AccountId",
                table: "VoucherRows",
                column: "AccountId");

            migrationBuilder.CreateIndex(
                name: "IX_VoucherRows_CompanyId",
                table: "VoucherRows",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_VoucherRows_ImportId",
                table: "VoucherRows",
                column: "ImportId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SieBookingYears");

            migrationBuilder.DropTable(
                name: "Vouchers");

            migrationBuilder.DropTable(
                name: "VoucherRows");

            migrationBuilder.DropTable(
                name: "SieAccounts");

            migrationBuilder.DropTable(
                name: "SieFileImports");

            migrationBuilder.DropTable(
                name: "Companies");
        }
    }
}
