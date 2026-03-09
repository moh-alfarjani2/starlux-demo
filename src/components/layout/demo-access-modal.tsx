import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { User, Briefcase, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface DemoAccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const DemoAccessModal = ({ isOpen, onClose }: DemoAccessModalProps) => {
    const roles = [
        {
            title: "Guest Portal",
            desc: "View upcoming trips, points, and wishlist.",
            href: "/dashboard",
            icon: <User className="text-primary" />,
            color: "bg-primary/10",
        },
        {
            title: "Owner Dashboard",
            desc: "Monitor revenue, occupancy, and properties.",
            href: "/owner",
            icon: <Briefcase className="text-accent" />,
            color: "bg-accent/10",
        },
        {
            title: "Admin Center",
            desc: "Platform oversight and system commands.",
            href: "/admin",
            icon: <ShieldCheck className="text-blue-600" />,
            color: "bg-blue-50",
        },
    ];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden border-none luxury-shadow rounded-2xl">
                <div className="bg-secondary p-8 text-white relative overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
                    <DialogHeader className="relative z-10">
                        <DialogTitle className="text-2xl font-bold">Demo Access</DialogTitle>
                        <DialogDescription className="text-white/60 italic">
                            Select a role to explore the Starlux ecosystem.
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <div className="p-6 bg-white space-y-4">
                    {roles.map((role) => (
                        <Link key={role.href} to={role.href} onClick={onClose}>
                            <div className="group flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-primary/20 hover:bg-muted/30 transition-all cursor-pointer">
                                <div className={`p-3 rounded-xl ${role.color} group-hover:scale-110 transition-transform`}>
                                    {role.icon}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-secondary">{role.title}</h4>
                                    <p className="text-xs text-muted-foreground">{role.desc}</p>
                                </div>
                                <ArrowRight size={18} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="p-4 bg-muted/30 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Starlux Individual Demo Edition
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
};
