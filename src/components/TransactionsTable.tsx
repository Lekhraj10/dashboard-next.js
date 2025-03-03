"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface Transaction {
  id: number;
  name: string;
  amount: string;
  date: string;
}

// Sample transactions (you can fetch this dynamically)
const transactions: Transaction[] = [
  { id: 1, name: "John Doe", amount: "$120", date: "2025-03-01" },
  { id: 2, name: "Alice Smith", amount: "$340", date: "2025-03-02" },
  { id: 3, name: "Bob Johnson", amount: "$200", date: "2025-03-03" },
  { id: 4, name: "Jane Brown", amount: "$400", date: "2025-03-04" },
  { id: 5, name: "Chris Evans", amount: "$150", date: "2025-03-05" },
  { id: 6, name: "Emma Wilson", amount: "$500", date: "2025-03-06" },
  { id: 7, name: "Michael Lee", amount: "$320", date: "2025-03-07" },
  { id: 8, name: "Sophia Martinez", amount: "$280", date: "2025-03-08" },
  { id: 9, name: "William Brown", amount: "$350", date: "2025-03-09" },
  { id: 10, name: "Olivia Taylor", amount: "$420", date: "2025-03-10" },
  { id: 11, name: "Daniel Harris", amount: "$250", date: "2025-03-11" },
  { id: 12, name: "Isabella Clark", amount: "$310", date: "2025-03-12" },
  { id: 13, name: "James White", amount: "$270", date: "2025-03-13" },
  { id: 14, name: "Charlotte Lewis", amount: "$390", date: "2025-03-14" },
  { id: 15, name: "Benjamin Walker", amount: "$450", date: "2025-03-15" },
  { id: 16, name: "Elijah Scott", amount: "$330", date: "2025-03-16" },
  { id: 17, name: "Mia Allen", amount: "$290", date: "2025-03-17" },
  { id: 18, name: "Alexander Wright", amount: "$470", date: "2025-03-18" },
  { id: 19, name: "Amelia Green", amount: "$380", date: "2025-03-19" },
  { id: 20, name: "Lucas Hall", amount: "$410", date: "2025-03-20" },
];

const ITEMS_PER_PAGE = 5; // Display at least 5 transactions per page

const TransactionsTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedTransactions = transactions.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedTransactions.map((tx) => (
            <TableRow key={tx.id}>
              <TableCell>{tx.name}</TableCell>
              <TableCell>{tx.amount}</TableCell>
              <TableCell>{tx.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls at Bottom */}
      <div className="flex justify-end items-center mt-4 space-x-2">
        {/* First Button */}
        <Button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          variant="outline"
        >
          First
        </Button>

        {/* Previous Button */}
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          variant="outline"
        >
          Prev
        </Button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            onClick={() => setCurrentPage(page)}
            variant={page === currentPage ? "default" : "outline"}
          >
            {page}
          </Button>
        ))}

        {/* Next Button */}
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          variant="outline"
        >
          Next
        </Button>

        {/* Last Button */}
        <Button
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
          variant="outline"
        >
          Last
        </Button>
      </div>
    </div>
  );
};

export default TransactionsTable;
