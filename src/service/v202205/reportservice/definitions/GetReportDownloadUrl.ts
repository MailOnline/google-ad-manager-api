
/** getReportDownloadURL */
export interface GetReportDownloadUrl {
    /** xsd:long */
    reportJobId?: string;
    /** ExportFormat|xsd:string|TSV,TSV_EXCEL,CSV_DUMP,XML,XLSX */
    exportFormat?: string;
}
